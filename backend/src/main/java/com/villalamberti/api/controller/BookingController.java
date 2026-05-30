package com.villalamberti.api.controller;

import com.villalamberti.api.dto.ApiResponse;
import com.villalamberti.api.dto.BookingRequest;
import com.villalamberti.api.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/booking")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public ResponseEntity<ApiResponse<Void>> book(@Valid @RequestBody BookingRequest req) {
        bookingService.processBooking(req);
        return ResponseEntity.ok(ApiResponse.ok(
            "Richiesta ricevuta! Ti contatteremo entro poche ore per confermare la disponibilità.",
            null
        ));
    }
}
