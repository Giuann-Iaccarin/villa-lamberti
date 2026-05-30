package com.villalamberti.api.controller;

import com.villalamberti.api.dto.ApiResponse;
import com.villalamberti.api.dto.BnBInfoDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/info")
public class InfoController {

    @Value("${villa-lamberti.whatsapp-number}")
    private String whatsappNumber;

    @GetMapping
    public ResponseEntity<ApiResponse<BnBInfoDTO>> getInfo() {
        BnBInfoDTO info = BnBInfoDTO.builder()
                .name("Villa Lamberti")
                .address("Via Panoramica, Monte di Procida (NA), 80070")
                .phone("+39 333 123 4567")
                .email("info@villalamberti.it")
                .whatsapp(whatsappNumber)
                .checkIn("14:00 – 20:00")
                .checkOut("fino alle 11:00")
                .bookingLinks(List.of(
                        "https://www.booking.com",
                        "https://www.airbnb.it"
                ))
                .coordinates(BnBInfoDTO.Coordinates.builder()
                        .lat(40.7889)
                        .lng(14.0567)
                        .build())
                .build();

        return ResponseEntity.ok(ApiResponse.ok("ok", info));
    }
}
