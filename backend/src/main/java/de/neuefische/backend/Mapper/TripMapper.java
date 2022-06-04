package de.neuefische.backend.Mapper;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;

public class TripMapper {

    public static Trip tripDtoToTrip(TripDto tripDto) {

        return Trip.builder()
                .title(tripDto.getTitle())
                .destinationCountry(tripDto.getDestinationCountry())
                .travellerAmount(tripDto.getTravellerAmount())
                .dateOfDeparture(tripDto.getDateOfDeparture())
                .dateOfReturning(tripDto.getDateOfReturning())
                .personalBudget(tripDto.getPersonalBudget())
                .transportations(tripDto.getTransportations())
                .accommodations(tripDto.getAccommodations())
                .foods(tripDto.getFoods())
                .shoppings(tripDto.getShoppings())
                .activities(tripDto.getActivities())
                .build();
    }
}
