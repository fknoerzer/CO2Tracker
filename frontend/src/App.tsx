import React from 'react';
import './App.css';


import AddTripPage from "./pages/AddTripPage";
import DetailsPage from "./pages/DetailsPage";
import useTrips from "./hooks/UseTrips";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {Navbar} from "./components/Navbar";
import {deleteTripById, putTrip} from "./service/api-service";

export default function App() {
    const {addNewTrip} = useTrips()
    return (

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="addtrip" element={<AddTripPage addNewTrip={addNewTrip}/>}/>
                <Route path={`/trips/:id`}
                       element={<DetailsPage deleteTripById={deleteTripById} editTrip={putTrip}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

