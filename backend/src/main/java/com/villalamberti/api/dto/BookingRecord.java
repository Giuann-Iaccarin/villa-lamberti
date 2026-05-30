package com.villalamberti.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.time.LocalDate;

@Data
@AllArgsConstructor
public class BookingRecord {
    private String roomSlug;
    private LocalDate checkIn;
    private LocalDate checkOut;
}
