package com.villalamberti.api.service;

import com.villalamberti.api.dto.BookingRecord;
import com.villalamberti.api.dto.BookingRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookingService {

    private final JavaMailSender mailSender;
    private final BookingRepository bookingRepository;

    @Value("${villa-lamberti.contact-email}")
    private String contactEmail;

    public void processBooking(BookingRequest req) {
        LocalDate checkIn  = LocalDate.parse(req.getCheckIn());
        LocalDate checkOut = LocalDate.parse(req.getCheckOut());

        if (!bookingRepository.isAvailable(req.getRoomSlug(), checkIn, checkOut)) {
            throw new IllegalStateException(
                "La camera non è disponibile per le date richieste."
            );
        }

        bookingRepository.save(new BookingRecord(req.getRoomSlug(), checkIn, checkOut));

        try {
            SimpleMailMessage msg = new SimpleMailMessage();
            msg.setTo(contactEmail);
            msg.setReplyTo(req.getEmail());
            msg.setSubject("Nuova prenotazione: " + req.getRoomName()
                + " — " + req.getCheckIn() + " / " + req.getCheckOut());
            msg.setText(buildEmailBody(req));
            mailSender.send(msg);
            log.info("Booking confirmed: {} [{}→{}] from {}",
                req.getRoomName(), req.getCheckIn(), req.getCheckOut(), req.getEmail());
        } catch (Exception e) {
            log.error("Failed to send booking email: {}", e.getMessage());
            throw new RuntimeException("Invio email fallito. Riprova o contattaci via WhatsApp.");
        }
    }

    private String buildEmailBody(BookingRequest req) {
        return String.format("""
                ╔══════════════════════════════════════════╗
                   NUOVA PRENOTAZIONE — Villa Lamberti
                ╚══════════════════════════════════════════╝

                Camera:     %s
                Check-in:   %s
                Check-out:  %s
                Ospiti:     %s

                ──────────────────────────────────────────
                OSPITE
                ──────────────────────────────────────────
                Nome:       %s
                Email:      %s
                Telefono:   %s

                Note:
                %s

                ──────────────────────────────────────────
                PROSSIMO PASSO: contattare l'ospite per
                il pagamento e confermare la prenotazione.
                ──────────────────────────────────────────
                """,
                req.getRoomName(),
                req.getCheckIn(),
                req.getCheckOut(),
                req.getGuests(),
                req.getName(),
                req.getEmail(),
                req.getPhone() != null && !req.getPhone().isBlank() ? req.getPhone() : "—",
                req.getNotes() != null && !req.getNotes().isBlank() ? req.getNotes() : "—"
        );
    }
}
