package com.villalamberti.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class BookingRequest {

    @NotBlank(message = "Camera obbligatoria")
    private String roomName;

    @NotBlank(message = "Slug camera obbligatorio")
    private String roomSlug;

    @NotBlank(message = "Check-in obbligatorio")
    private String checkIn;

    @NotBlank(message = "Check-out obbligatorio")
    private String checkOut;

    @NotBlank(message = "Numero ospiti obbligatorio")
    private String guests;

    @NotBlank(message = "Nome obbligatorio")
    @Size(max = 100)
    private String name;

    @NotBlank(message = "Email obbligatoria")
    @Email(message = "Email non valida")
    private String email;

    @Size(max = 20)
    private String phone;

    @Size(max = 1000)
    private String notes;
}
