import React from 'react';
import './App.css';
import AddTripPage from "./pages/AddTripPage";
import DetailsPage from "./pages/DetailsPage";
import useTrips from "./hooks/UseTrips";
import {Routes, Route, HashRouter} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {Navbar} from "./components/Navbar";
import {deleteTripById, putTrip,
} from "./service/api-service";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
    const {addNewTrip} = useTrips()
    return (

        <HashRouter>
            <Navbar/>
            <div className={"app"}>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                />
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/addtrip" element={<AddTripPage addNewTrip={addNewTrip}/>}/>
                <Route path={`/trips/:id/*`}
                       element={<DetailsPage deleteTripById={deleteTripById} editTrip={putTrip}/>}/>
            </Routes>
            </div>
        </HashRouter>
    )
}

