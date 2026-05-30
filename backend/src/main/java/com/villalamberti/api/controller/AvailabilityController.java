package com.villalamberti.api.controller;

import com.villalamberti.api.dto.ApiResponse;
import com.villalamberti.api.dto.AvailabilityResponse;
import com.villalamberti.api.service.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;

@RestController
@RequestMapping("/api/availability")
@RequiredArgsConstructor
public class AvailabilityController {

    private final BookingRepository bookingRepository;

    @GetMapping
    public ResponseEntity<ApiResponse<AvailabilityResponse>> check(
            @RequestParam String room,
            @RequestParam String checkIn,
            @RequestParam String checkOut) {

        try {
            LocalDate in  = LocalDate.parse(checkIn);
            LocalDate out = LocalDate.parse(checkOut);

            if (!out.isAfter(in)) {
                return ResponseEntity.badRequest()
                    .body(ApiResponse.error("Check-out deve essere dopo il check-in"));
            }

            boolean available = bookingRepository.isAvailable(room, in, out);
            return ResponseEntity.ok(ApiResponse.ok("OK", new AvailabilityResponse(available)));

        } catch (DateTimeParseException e) {
            return ResponseEntity.badRequest()
                .body(ApiResponse.error("Formato data non valido (usare YYYY-MM-DD)"));
        }
    }
}
