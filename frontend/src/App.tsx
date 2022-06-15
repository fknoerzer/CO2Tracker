import React from 'react';
import './App.css';
import AddTripPage from "./pages/AddTripPage";
import DetailsPage from "./pages/DetailsPage";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./routing/RequireAuth";
import {Navbar} from "./components/Util/Navbar";
import LogoutPage from "./pages/LogoutPage";
import StatisticsPage from "./pages/StatisticsPage";

export default function App() {

    return (
        <>
            {<Navbar/>}
            <div className={"app"}>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                />
                <Routes>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route element={<RequireAuth/>}>
                        <Route path={"/logout"} element={<LogoutPage/>}/>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/addtrip" element={<AddTripPage/>}/>
                        <Route path={"/trips/:id/*"} element={<DetailsPage/>}/>
                        <Route path={"/alltrips"} element={<StatisticsPage/>}/>

                    </Route>
                </Routes>
            </div>
        </>
    )
}

