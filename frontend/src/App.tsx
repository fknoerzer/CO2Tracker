import React from 'react';
import './App.css';


import AddTripPage from "./pages/AddTripPage";
import useTrips from "./hooks/UseTrips";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {AppTitle} from "./components/AppTitle";

export default function App() {
    const {addNewTrip, trips} = useTrips()
    return (

        <BrowserRouter>
            <AppTitle/>
            <Routes>
                <Route path="addtrip" element={<AddTripPage addNewTrip={addNewTrip}/>}/>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

