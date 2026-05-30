package com.villalamberti.api.dto;

import lombok.Builder;
import lombok.Data;
import java.util.List;

@Data
@Builder
public class BnBInfoDTO {
    private String name;
    private String address;
    private String phone;
    private String email;
    private String whatsapp;
    private String checkIn;
    private String checkOut;
    private List<String> bookingLinks;
    private Coordinates coordinates;

    @Data
    @Builder
    public static class Coordinates {
        private double lat;
        private double lng;
    }
}
