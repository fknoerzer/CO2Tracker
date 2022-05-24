import React from 'react';
import './App.css';


import {AppTitle} from "./components/AppTitle";
import AddTripPage from "./pages/AddTripPage";
import useTrips from "./hooks/UseTrips";

export default function App() {
    const{addNewTrip} = useTrips()
    return (
            <div className="App">
                <AppTitle/>
                <AddTripPage addNewTrip={addNewTrip}/>
            </div>
    );
}

