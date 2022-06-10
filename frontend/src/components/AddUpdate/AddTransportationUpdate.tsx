import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Transportation, Trip} from "../../model/Trip";
import {putTrip} from "../../service/api-service";

type AddTransportationUpdateProps = {
    trip: Trip
}

export default function AddTransportationUpdate({trip}: AddTransportationUpdateProps) {
    const navigate = useNavigate()
    const [distance, setDistance] = useState<number>(0)
    const [typeOfTransport, setTypeOfTransport] = useState<string>(``)

    const onUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedTrip = {...trip}

        const newTransportation: Transportation = {
            distance: distance,
            typeOfTransport: typeOfTransport
        }
        updatedTrip.transportations.push(newTransportation)

        putTrip(updatedTrip)
            .then(() => {
                setDistance(0)
                setTypeOfTransport(``)
                navigate(`/`)
            })
            .catch(console.error)

    }
    return (
        <form className={"update-trip-Transport"} onSubmit={onUpdate}>
            <label className="label-input-update">Travel Distance:
                <input className="number-field" type="number"
                       placeholder="Add your additional Travel Distance."
                       min="0"
                       step="10" value={distance}
                       onChange={event => setDistance(Number(event.target.value))}/>
            </label>
            <label className="label-input-update">Type of Transport:</label>
            <select className="dataList-input-update" id="transports" value={typeOfTransport}
                    onChange={event => setTypeOfTransport(event.target.value)}>
                <option value="DEFAULT" disabled>Choose here</option>
                <option value="Airplane">Airplane</option>
                <option value="Car">Car</option>
                <option value="Camper">Camper</option>
                <option value="Train">Train</option>
                <option value="Bus">Bus</option>
                <option value="Motorbike">Motorbike</option>
                <option value="Ferry">Ferry</option>
                <option value="Walking">Walking</option>
            </select>
            <button className={"update-button"}>Update</button>
        </form>
    )
}