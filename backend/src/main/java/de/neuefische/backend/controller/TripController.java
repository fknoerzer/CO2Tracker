package de.neuefische.backend.controller;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.Trip;
import de.neuefische.backend.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public List<de.neuefische.backend.model.Trip> getAllTrips() {
        return tripService.getAllTrips();
    }

    @GetMapping("{id}")
    public de.neuefische.backend.model.Trip getTripListById(@PathVariable String id) {
        return tripService.getTripById(id);
    }

    @PostMapping
    public de.neuefische.backend.model.Trip addNewTrip(@Valid @RequestBody TripDto newTrip) {
        return tripService.addNewTrip(newTrip);
    }

    @DeleteMapping("{id}")
    public void deleteTrip(@PathVariable String id) {
        tripService.deleteTrip(id);
    }

    @PutMapping("{id}")
    public Trip editTrip(@PathVariable String id, @Valid @RequestBody Trip editedTrip) {
        if (!id.equals(editedTrip.getId())) {
            throw new IllegalArgumentException("Could not edit element! Path id does not match with element id in request body!");
        }
        return tripService.editTrip(editedTrip);
    }
}