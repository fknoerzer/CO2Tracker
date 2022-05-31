package de.neuefische.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TripUpdateAccommodationEmissionsDto {

        private String typeOfAccommodation;
        private double additionalNights;
    }