package com.villalamberti.api.service;

import com.villalamberti.api.dto.BookingRecord;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class BookingRepository {

    private final List<BookingRecord> bookings = new CopyOnWriteArrayList<>();

    public boolean isAvailable(String roomSlug, LocalDate checkIn, LocalDate checkOut) {
        return bookings.stream()
            .filter(b -> b.getRoomSlug().equalsIgnoreCase(roomSlug))
            .noneMatch(b -> checkIn.isBefore(b.getCheckOut()) && checkOut.isAfter(b.getCheckIn()));
    }

    public void save(BookingRecord record) {
        bookings.add(record);
    }
}
