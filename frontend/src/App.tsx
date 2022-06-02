import React from 'react';
import './App.css';
import AddTripPage from "./pages/AddTripPage";
import DetailsPage from "./pages/DetailsPage";
import useTrips from "./hooks/UseTrips";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {Navbar} from "./components/Navbar";
import {
    deleteTripById,
    putTrip,
    updateAccommodationEmissions, updateActivityEmissions,
    updateFoodEmissions, updateShoppingEmissions,
    updateTransportEmissions
} from "./service/api-service";
import UpdateTransportationPage from "./pages/UpdateTransportationPage";
import UpdateAccommodationPage from "./pages/UpdateAccommodationPage";
import UpdateFoodPage from "./pages/UpdateFoodPage";
import UpdateShoppingPage from "./pages/UpdateShoppingPage";
import UpdateActivityPage from "./pages/UpdateActivityPage";

export default function App() {
    const {addNewTrip} = useTrips()
    return (

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/addtrip" element={<AddTripPage addNewTrip={addNewTrip}/>}/>
                <Route path={`/trips/:id`}
                       element={<DetailsPage deleteTripById={deleteTripById} editTrip={putTrip}/>}/>
                <Route path="/update/transportation/:id"
                       element={<UpdateTransportationPage updateTransportEmissions={updateTransportEmissions}/>}/>
                <Route path="/update/accommodation/:id"
                       element={<UpdateAccommodationPage updateAccommodationEmissions={updateAccommodationEmissions}/>}/>
                <Route path="/update/food/:id"
                       element={<UpdateFoodPage updateFoodEmissions={updateFoodEmissions}/>}/>
                <Route path="/update/shopping/:id"
                       element={<UpdateShoppingPage updateShoppingEmissions={updateShoppingEmissions}/>}/>
                <Route path="/update/activity/:id"
                       element={<UpdateActivityPage updateActivityEmissions={updateActivityEmissions}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

