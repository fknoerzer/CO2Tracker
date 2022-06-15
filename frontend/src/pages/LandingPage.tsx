import TripsOverview from "../components/Overview/TripsOverview";
import useTrips from "../hooks/UseTrips"

export default function LandingPage() {
    const {trips} = useTrips();
    return (
            <TripsOverview trips={trips} />
    )
}