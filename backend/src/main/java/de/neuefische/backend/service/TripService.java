package de.neuefische.backend.service;

import de.neuefische.backend.calculations.EditEmissionsCalculationService;
import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.Trip;
import de.neuefische.backend.repository.TripRepo;
import de.neuefische.backend.wrapper.DtoWrapper;
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
        Trip wrappedTrip = DtoWrapper.transferDto(tripDto);
        Trip newTrip = EditEmissionsCalculationService.transferEditTrip(wrappedTrip);
        return tripRepo.insert(newTrip);
    }

    public Trip getTripById(String id) {
        return tripRepo.findById(id).orElseThrow(() -> new NoSuchElementException("Trip with id: " + id + " was not found!"));
    }

    public void deleteTrip(String id) {
        tripRepo.deleteById(id);
    }

    public Trip editTrip(Trip editedTrip) {
        if (tripRepo.existsById(editedTrip.getId())) {
            Trip newGeneratedTrip = EditEmissionsCalculationService.transferEditTrip(editedTrip);
            return tripRepo.save(newGeneratedTrip);
        } else {
            throw new NoSuchElementException("Could not update trip element! Element with id does not exist: " + editedTrip.getId());
        }
    }
}