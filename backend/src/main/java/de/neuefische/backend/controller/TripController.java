package de.neuefische.backend.controller;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.Trip;
import de.neuefische.backend.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/trips")
public class TripController {

    private final TripService tripService;

    @Autowired
    public TripController(TripService tripService) {
        this.tripService = tripService;
    }

    @GetMapping
    public List<Trip> getAllTrips() {
        return tripService.getAllTrips();
    }

    @GetMapping("{id}")
    public Trip getTripListById(@PathVariable String id) {
        return tripService.getTripById(id);
    }

    @PostMapping
    public Trip addNewTrip(@RequestBody TripDto newTrip) {
        return tripService.addNewTrip(newTrip);
    }
}
