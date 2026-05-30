package com.villalamberti.api.controller;

import com.villalamberti.api.dto.ApiResponse;
import com.villalamberti.api.dto.ContactRequest;
import com.villalamberti.api.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public ResponseEntity<ApiResponse<Void>> contact(@Valid @RequestBody ContactRequest req) {
        contactService.sendContactEmail(req);
        return ResponseEntity.ok(ApiResponse.ok("Messaggio inviato! Ti risponderemo presto.", null));
    }
}
