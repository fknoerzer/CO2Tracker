import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import TripsOverview from "./pages/TripsOverview";
import {AppTitle} from "./components/AppTitle";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <AppTitle/>
                <Routes>
                    <Route path="/" element={<TripsOverview/>}/>
                </Routes>

            </div>
        </HashRouter>
    )
}

export default App;
