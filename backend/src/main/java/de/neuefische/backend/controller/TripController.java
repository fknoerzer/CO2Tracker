package de.neuefische.backend.controller;

import de.neuefische.backend.dto.*;
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

    @DeleteMapping("{id}")
    public void deleteTrip(@PathVariable String id) {
        tripService.deleteTrip(id);
    }

    @PutMapping("{id}")
    public Trip editTrip(@PathVariable String id, @RequestBody Trip editedTrip) {
        if (!id.equals(editedTrip.getId())) {
            throw new IllegalArgumentException("Could not edit element! Path id does not match with element id in request body!");
        }
        return tripService.editTrip(editedTrip);
    }

    @PatchMapping("/update/transport/{id}")
    public Trip patchTransportEmissions(@PathVariable String id, @RequestBody TripUpdateTransportEmissionsDto tripUpdateTransportEmissionsDto) {
        return tripService.updateTransportEmissions(id, tripUpdateTransportEmissionsDto);
    }

    @PatchMapping("/update/accommodation/{id}")
    public Trip patchAccommodationEmissions(@PathVariable String id, @RequestBody TripUpdateAccommodationEmissionsDto tripUpdateAccommodationEmissionsDto) {
        return tripService.updateAccommodationEmissions(id, tripUpdateAccommodationEmissionsDto);
    }

    @PatchMapping("/update/food/{id}")
    public Trip patchFoodEmissions(@PathVariable String id, @RequestBody TripUpdateFoodEmissionsDto tripUpdateFoodEmissionsDto) {
        return tripService.updateFoodEmissions(id, tripUpdateFoodEmissionsDto);
    }

    @PatchMapping("/update/activity{id}")
    public Trip patchActivityEmissions(@PathVariable String id, @RequestBody TripUpdateActivityEmissionsDto tripUpdateActivityEmissionsDto) {
        return tripService.updateActivityEmissions(id, tripUpdateActivityEmissionsDto);
    }

    @PatchMapping("/update/shopping/{id}")
    public Trip patchShoppingEmissions(@PathVariable String id, @RequestBody TripUpdateShoppingEmissionsDto tripUpdateShoppingEmissionsDto) {
        return tripService.updateShoppingEmissions(id, tripUpdateShoppingEmissionsDto);
    }
}
