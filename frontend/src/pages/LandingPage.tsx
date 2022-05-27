import TripsOverview from "../components/TripsOverview";
import useTrips from "../hooks/UseTrips";

export default function LandingPage() {

const {trips} = useTrips();
return (
    <div>
        <TripsOverview trips={trips}/>
    </div>
)
}