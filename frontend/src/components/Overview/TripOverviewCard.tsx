import {Trip} from "../../model/Trip";
import "../styles/TripOverviewCard.css"
import {formatDepartureDate, formatReturningDate} from "../Util/Calculations";
import {useNavigate} from "react-router-dom";
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type TripOverviewCardProps = {
    trip: Trip;
}

export default function TripOverviewCard({trip}: TripOverviewCardProps) {
    const navigate = useNavigate();
    const value = Math.round((trip.calculatedEmissions.totalEmissions / trip.personalBudget) * 100);
    const getFlagEmoji = (countryCode: any)=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()))

    return (
        <div className="trip-overview-card">
            <div className="trip-infos">
                <p className={"title"}>{trip.title} {trip.year} {getFlagEmoji(trip.destinationCountry)}</p>
                <p className={"date"}>From <strong> {formatDepartureDate(trip.dateOfDeparture)}</strong> to <strong> {formatReturningDate(trip.dateOfReturning)}</strong></p>
                <p className={"total emissions"}>Total emissions for this trip: <br/> <strong> {Math.round(trip.calculatedEmissions.totalEmissions)} </strong>kg CO<sub>2</sub>-eq.</p>
                <div className="progress-bar" style={{width: 150, height: 100, marginBottom: 60}}>
                    <CircularProgressbarWithChildren value={value}
                                                     styles={buildStyles({
                                                         textColor: "white",
                                                         pathColor: "#EF626C",
                                                         trailColor: "#77FF94",
                                                         textSize: "12px",
                                                     })}>
                        <div>
                            CO<sub>2</sub> Budget:<br/>
                            <strong>{`${value}%`}</strong>
                            <br/>used
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            <div className={"trip-overview-buttons"}>
            <button className={"offset-button"} onClick={() => navigate(`trips/${trip.id}/offset`)}>Offset</button>
            <button className={"details-button"} onClick={() => navigate(`/trips/${trip.id}`)}>Details</button>
                </div>
            </div>
    )
}