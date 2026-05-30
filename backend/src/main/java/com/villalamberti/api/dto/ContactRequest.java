package com.villalamberti.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ContactRequest {

    @NotBlank(message = "Nome obbligatorio")
    @Size(max = 100)
    private String name;

    @NotBlank(message = "Email obbligatoria")
    @Email(message = "Email non valida")
    private String email;

    @Size(max = 20)
    private String phone;

    private String checkIn;
    private String checkOut;

    @Size(max = 10)
    private String guests;

    @NotBlank(message = "Messaggio obbligatorio")
    @Size(min = 10, max = 2000, message = "Messaggio deve essere tra 10 e 2000 caratteri")
    private String message;
}
