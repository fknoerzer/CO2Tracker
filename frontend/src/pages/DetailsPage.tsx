import {Route, Routes, useParams} from "react-router-dom";
import useDetailedTrip from "../hooks/useDetailedTrip";
import React, {useEffect} from "react";
import EditTripPage from "./EditTripPage";
import ShowTripDetails from "../components/Details/ShowTripDetails";
import UpdateTransportationPage from "./UpdateTransportationPage";
import UpdateAccommodationPage from "./UpdateAccommodationPage";
import UpdateFoodPage from "./UpdateFoodPage";
import UpdateShoppingPage from "./UpdateShoppingPage";
import UpdateActivityPage from "./UpdateActivityPage";
import RequireAuth from "../routing/RequireAuth";
import OffsetPage from "./OffsetPage";


export default function DetailsPage() {
    const {id} = useParams()
    const {detailedTrip, getTripById,} = useDetailedTrip()


    useEffect(() => {
        if (id) {
            getTripById(id)
        }
        // eslint-disable-next-line
    }, [id])

    if (detailedTrip) {
        return (
            <Routes>
                <Route element={<RequireAuth/>}>
                    <Route index element={<ShowTripDetails trip={detailedTrip}/>}/>
                    <Route path="/offset" element={<OffsetPage trip={detailedTrip}/>}/>
                    <Route path="/update/transportation/"
                           element={<UpdateTransportationPage trip={detailedTrip}/>}/>
                    <Route path="/update/accommodation/"
                           element={<UpdateAccommodationPage trip={detailedTrip}/>}/>
                    <Route path="/update/food/"
                           element={<UpdateFoodPage trip={detailedTrip}/>}/>
                    <Route path="/update/shopping/"
                           element={<UpdateShoppingPage trip={detailedTrip}/>}/>
                    <Route path="/update/activity/"
                           element={<UpdateActivityPage trip={detailedTrip}/>}/>
                    <Route path="/edit/"
                           element={<EditTripPage trip={detailedTrip}/>}/>
                </Route>
            </Routes>
        )
    }
    return (<div>No Connection. Please wait.</div>)
}
