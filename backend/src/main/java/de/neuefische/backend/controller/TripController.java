package de.neuefische.backend.controller;

import de.neuefische.backend.model.Trip;
import de.neuefische.backend.service.TripService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/trips")
public class TripController {

    private final TripService tripService;

    public TripController(TripService tripService) {
        this.tripService = tripService;
    }

    @GetMapping
    public List<Trip> getAllTrips() {
        return tripService.getAllTrips();
    }

    @PostMapping
    public Trip addNewTrip (@RequestBody Trip newTrip) {
        return tripService.addNewTrip(newTrip);
    }
}
