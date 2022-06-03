package de.neuefische.backend.wrapper;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;

import java.util.List;

public class DtoWrapper {

    public static Trip transferDto(TripDto tripDto) {
        List<Transportation> tripTransportations = tripDto.getTransportations();
        List<Accommodation> tripAccommodations = tripDto.getAccommodations();
        List<Food> tripFoods = tripDto.getFoods();
        List<Shopping> tripShoppings = tripDto.getShoppings();
        List<Activity> tripActivities = tripDto.getActivities();

        return Trip.builder()
                .title(tripDto.getTitle())
                .destinationCountry(tripDto.getDestinationCountry())
                .travellerAmount(tripDto.getTravellerAmount())
                .dateOfDeparture(tripDto.getDateOfDeparture())
                .dateOfReturning(tripDto.getDateOfReturning())
                .personalBudget(tripDto.getPersonalBudget())
                .transportations(tripTransportations)
                .accommodations(tripAccommodations)
                .foods(tripFoods)
                .shoppings(tripShoppings)
                .activities(tripActivities)
                .build();
    }
}
