package de.neuefische.backend.service;

import de.neuefische.backend.calculations.EmissionCalculationService;
import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.TripRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TripService {

    private final TripRepo tripRepo;

    @Autowired
    public TripService(TripRepo tripRepo) {
        this.tripRepo = tripRepo;
    }

    public List<Trip> getAllTrips() {
        return tripRepo.findAll();
    }

    public Trip addNewTrip(TripDto tripDto) {

        Transportation transportation = new Transportation();
        transportation.setDistance(tripDto.getTransportation().getDistance());
        transportation.setTypeOfTransport(tripDto.getTransportation().getTypeOfTransport());

        Accommodation accommodation = new Accommodation();
        accommodation.setTypeOfAccommodation(tripDto.getAccommodation().getTypeOfAccommodation());

        Food food = new Food();
        food.setTypeOfDiet(tripDto.getFood().getTypeOfDiet());

        Shopping shopping = new Shopping();
        shopping.setNumberOfClothingItems(tripDto.getShopping().getNumberOfClothingItems());
        shopping.setNumberOfElectronicItems(tripDto.getShopping().getNumberOfElectronicItems());
        shopping.setNumberOfSouvenirItems(tripDto.getShopping().getNumberOfSouvenirItems());
        shopping.setCustomShoppingItem(tripDto.getShopping().getCustomShoppingItem());
        shopping.setCustomShoppingItemEmission(tripDto.getShopping().getCustomShoppingItemEmission());
        shopping.setCustomShoppingItemEmission(tripDto.getShopping().getCustomShoppingItemEmission());
        shopping.setAmountOfCustomShoppingItem(tripDto.getShopping().getAmountOfCustomShoppingItem());

        Activity activity = new Activity();
        activity.setAmountOfGolfRounds(tripDto.getActivity().getAmountOfGolfRounds());
        activity.setAmountOfSkiingDays(tripDto.getActivity().getAmountOfSkiingDays());
        activity.setAmountOfBeautyDays(tripDto.getActivity().getAmountOfBeautyDays());
        activity.setCustomActivityItem(tripDto.getActivity().getCustomActivityItem());
        activity.setCustomActivityEmission(tripDto.getActivity().getCustomActivityEmission());

        CalculatedEmissions calculatedEmissions = new CalculatedEmissions();
        calculatedEmissions.setTransportationEmissions(EmissionCalculationService.getTransportationEmissions(tripDto));
        calculatedEmissions.setAccommodationEmissions(EmissionCalculationService.getAccommodationEmissions(tripDto));
        calculatedEmissions.setFoodEmissions(EmissionCalculationService.getFoodEmissions(tripDto));
        calculatedEmissions.setShoppingEmissions(EmissionCalculationService.getShoppingEmissions(tripDto));
        calculatedEmissions.setActivitiesEmissions(EmissionCalculationService.getActivitiesEmissions(tripDto));
        calculatedEmissions.setTotalEmissions(EmissionCalculationService.getAllEmissions(tripDto));

        Trip trip = new Trip();
        trip.setTitle(tripDto.getTitle());
        trip.setYear(EmissionCalculationService.getYearOfTrip(tripDto));
        trip.setDestinationCountry(tripDto.getDestinationCountry());
        trip.setTravellerAmount(tripDto.getTravellerAmount());
        trip.setDateOfDeparture(tripDto.getDateOfDeparture());
        trip.setDateOfReturning(tripDto.getDateOfReturning());
        trip.setNumberOfNights(EmissionCalculationService.getNumberOfNights(tripDto));
        trip.setPersonalBudget(tripDto.getPersonalBudget());

        trip.setTransportation(transportation);
        trip.setAccommodation(accommodation);
        trip.setFood(food);
        trip.setShopping(shopping);
        trip.setActivity(activity);
        trip.setCalculatedEmissions(calculatedEmissions);


        return tripRepo.insert(trip);
    }

    public Trip getTripById(String id) {
        return tripRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Trip with id: " + id + " was not found!"));
    }
}
