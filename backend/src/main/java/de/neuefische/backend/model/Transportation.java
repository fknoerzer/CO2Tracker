package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Transportation {
    @NotNull(message = "Distance is mandatory")
    private double distance;

    @NotNull(message = "Type of Transport is mandatory")
    private String typeOfTransport;
}