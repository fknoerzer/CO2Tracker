package de.neuefische.backend.service;

import de.neuefische.backend.calculations.EmissionCalculationService;
import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.Trip;
import de.neuefische.backend.repository.TripRepo;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Builder
public class TripService {


    private final EmissionCalculationService emissionCalculationService;
    private final TripRepo tripRepo;

    @Autowired
    public TripService (EmissionCalculationService tripDataApi, TripRepo tripRepo){
        this.emissionCalculationService = tripDataApi;
        this.tripRepo=tripRepo;
    }


    public List<Trip> getAllTrips() {
        return tripRepo.findAll();
    }

    public Trip addNewTrip(TripDto tripDto) {
    Trip trip = new Trip();
    trip.setTitle(tripDto.getTitle());
    trip.setDistance(tripDto.getDistance());
    trip.setDestinationCountry(tripDto.getDestinationCountry());
    trip.setTravellerAmount(tripDto.getTravellerAmount());
    trip.setDateOfDeparture(tripDto.getDateOfDeparture());
    trip.setDateOfReturning(tripDto.getDateOfReturning());
    trip.setNumberOfNights(EmissionCalculationService.getNumberOfNights(tripDto));
    trip.setPersonalBudget(tripDto.getPersonalBudget());
    trip.setTypeOfTransport(tripDto.getTypeOfTransport());
    trip.setTypeOfAccommodation(tripDto.getTypeOfAccommodation());
    trip.setTypeOfDiet(tripDto.getTypeOfDiet());
    trip.setTransportationEmissions(EmissionCalculationService.getTransportationEmissions(tripDto));
    trip.setAccommodationEmissions(EmissionCalculationService.getAccommodationEmissions(tripDto));
    trip.setFoodEmissions(EmissionCalculationService.getFoodEmissions(tripDto));
    trip.setShoppingEmissions(EmissionCalculationService.getShoppingEmissions(tripDto));
    trip.setActivitiesEmissions(EmissionCalculationService.getActivitiesEmissions(tripDto));
    trip.setTotalEmissions(EmissionCalculationService.getAllEmissions(tripDto));

        return tripRepo.insert(trip);
    }
}
