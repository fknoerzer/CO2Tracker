package de.neuefische.backend.service;

import de.neuefische.backend.model.Trip;
import de.neuefische.backend.repository.TripRepo;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Builder
public class TripService {

    private final TripRepo tripRepo;

    @Autowired
    public TripService(TripRepo tripRepo) {
        this.tripRepo = tripRepo;
    }

    public List<Trip> getAllTrips() {
        return tripRepo.findAll();
    }

    public Trip addNewTrip(Trip newTrip) {
        return tripRepo.insert(newTrip);
    }
}
