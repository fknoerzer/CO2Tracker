import React from 'react';
import './App.css';
import AddTripPage from "./pages/AddTripPage";
import DetailsPage from "./pages/DetailsPage";
import useTrips from "./hooks/UseTrips";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {Navbar} from "./components/Navbar";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./pages/LoginPage";

export default function App() {
    const {addNewTrip} = useTrips()
    return (
        <>
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
                    <Route path={"/trips/:id/*"} element={<DetailsPage/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                </Routes>
            </div>
        </>
    )
}

