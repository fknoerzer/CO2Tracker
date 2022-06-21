package de.neuefische.backend.service;

import de.neuefische.backend.Mapper.TripMapper;
import de.neuefische.backend.calculations.EmissionsCalculationService;
import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.Trip;
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
       Trip newTrip = EmissionsCalculationService.transferEmissions(TripMapper.tripDtoToTrip(tripDto));
        return tripRepo.insert(newTrip);
    }

    public Trip getTripById(String id) {
        return tripRepo.findById(id).orElseThrow(() -> new NoSuchElementException("Trip with id: " + id + " was not found!"));
    }

    public void deleteTrip(String id) {
        tripRepo.deleteById(id);
    }

    public Trip editTrip(Trip tripWithEdits) {
        if (tripRepo.existsById(tripWithEdits.getId())) {
            Trip editedTrip = EmissionsCalculationService.transferEmissions(tripWithEdits);
            return tripRepo.save(editedTrip);
        } else {
            throw new NoSuchElementException("Could not update trip element! Element with id: " + tripWithEdits.getId() + " does not exist");
        }
    }
}