package de.neuefische.backend.service;

import de.neuefische.backend.calculations.EditEmissionsCalculationService;
import de.neuefische.backend.calculations.EmissionCalculationService;
import de.neuefische.backend.calculations.UpdateEmissionCalculationService;
import de.neuefische.backend.dto.*;
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
        Trip editedTrip = EmissionCalculationService.transferDto(tripDto);
        return tripRepo.insert(editedTrip);
    }

    public Trip getTripById(String id) {
        return tripRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Trip with id: " + id + " was not found!"));
    }

    public void deleteTrip(String id) {
        tripRepo.deleteById(id);
    }

    public Trip editTrip(Trip editedTrip) {
        if (tripRepo.existsById(editedTrip.getId())) {
            Trip newGeneratedTrip = EditEmissionsCalculationService.transferEditedTrip(editedTrip);
            return tripRepo.save(newGeneratedTrip);
        } else {
            throw new NoSuchElementException("Could not update trip element! Element with id does not exist: " + editedTrip.getId());
        }
    }

    public Trip updateTransportEmissions(String id, TripUpdateTransportEmissionsDto tripUpdateTransportEmissionsDto) {
        if (tripRepo.existsById(id)) {
            return tripRepo.save(UpdateEmissionCalculationService.updateTransportEmissions(getTripById(id), tripUpdateTransportEmissionsDto));

        } else {
            throw new NoSuchElementException("Could not update trip element! Element with id does not exist: " + id);
        }
    }

    public Trip updateAccommodationEmissions(String id, TripUpdateAccommodationEmissionsDto tripUpdateAccommodationEmissionsDto) {
        if (tripRepo.existsById(id)) {
            return tripRepo.save(UpdateEmissionCalculationService.updateAccommodationEmissions(getTripById(id), tripUpdateAccommodationEmissionsDto));

        } else {
            throw new NoSuchElementException("Could not update trip element! Element with id does not exist: " + id);
        }
    }

    public Trip updateFoodEmissions(String id, TripUpdateFoodEmissionsDto tripUpdateFoodEmissionsDto) {
        if (tripRepo.existsById(id)) {
            return tripRepo.save(UpdateEmissionCalculationService.updateFoodEmissions(getTripById(id), tripUpdateFoodEmissionsDto));
        } else {
            throw new NoSuchElementException("Could not update trip element! Element with id does not exist: " + id);
        }
    }

    public Trip updateActivityEmissions(String id, TripUpdateActivityEmissionsDto tripUpdateActivityEmissionsDto) {
        if (tripRepo.existsById(id)) {
            return tripRepo.save(UpdateEmissionCalculationService.updateActivityEmissions(getTripById(id), tripUpdateActivityEmissionsDto));
        } else {
            throw new NoSuchElementException("Could not update trip element! Element with id does not exist: " + id);
        }
    }

    public Trip updateShoppingEmissions(String id, TripUpdateShoppingEmissionsDto tripUpdateShoppingEmissionsDto) {
        if (tripRepo.existsById(id)) {
            return tripRepo.save(UpdateEmissionCalculationService.updateShoppingEmissions(getTripById(id), tripUpdateShoppingEmissionsDto));
        } else {
            throw new NoSuchElementException("Could not update trip element! Element with id does not exist: " + id);
        }
    }
}