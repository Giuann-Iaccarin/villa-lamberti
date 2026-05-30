package com.villalamberti.api.service;

import com.villalamberti.api.dto.ContactRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactService {

    private final JavaMailSender mailSender;

    @Value("${villa-lamberti.contact-email}")
    private String contactEmail;

    public void sendContactEmail(ContactRequest req) {
        try {
            SimpleMailMessage msg = new SimpleMailMessage();
            msg.setTo(contactEmail);
            msg.setReplyTo(req.getEmail());
            msg.setSubject("Nuova richiesta da " + req.getName() + " — Villa Lamberti");
            msg.setText(buildEmailBody(req));
            mailSender.send(msg);
            log.info("Contact email sent from {}", req.getEmail());
        } catch (Exception e) {
            log.error("Failed to send contact email from {}: {}", req.getEmail(), e.getMessage());
            throw new RuntimeException("Invio email fallito. Riprova o contattaci via WhatsApp.");
        }
    }

    private String buildEmailBody(ContactRequest req) {
        return String.format("""
                Nuova richiesta di contatto — Villa Lamberti
                =============================================
                Nome:       %s
                Email:      %s
                Telefono:   %s
                Check-in:   %s
                Check-out:  %s
                Ospiti:     %s

                Messaggio:
                %s
                """,
                req.getName(),
                req.getEmail(),
                req.getPhone() != null ? req.getPhone() : "—",
                req.getCheckIn() != null ? req.getCheckIn() : "—",
                req.getCheckOut() != null ? req.getCheckOut() : "—",
                req.getGuests() != null ? req.getGuests() : "—",
                req.getMessage()
        );
    }
}
