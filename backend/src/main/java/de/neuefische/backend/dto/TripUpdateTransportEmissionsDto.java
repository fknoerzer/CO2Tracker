package de.neuefische.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TripUpdateTransportEmissionsDto {

    private double distance;
    private String typeOfTransport;

}
