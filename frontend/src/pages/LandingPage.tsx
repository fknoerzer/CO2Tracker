import TripsOverview from "../components/TripsOverview";
import useTrips from "../hooks/UseTrips"

export default function LandingPage() {
    const {trips} = useTrips();
    return (
        <div className={"landing-page"} >
            <TripsOverview trips={trips}/>
            </div>
    )
}