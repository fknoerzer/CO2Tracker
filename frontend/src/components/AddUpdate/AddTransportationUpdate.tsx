import {FormEvent, useState} from "react";
import {TripUpdateTransportEmissionsDto} from "../../model/updateDtos/TripUpdateTransportEmissionsDto";
import {useNavigate} from "react-router-dom";
import {Transportation, Trip} from "../../model/Trip";
import {putTrip} from "../../service/api-service";

type AddTransportationUpdateProps = {
    trip: Trip
    updateTransportEmissions: (id: string, tripUpdateTransportEmissionsDto: TripUpdateTransportEmissionsDto) => void
}

export default function AddTransportationUpdate({updateTransportEmissions, trip}: AddTransportationUpdateProps) {
    const navigate = useNavigate()
    const [distance, setDistance] = useState<number>(0)
    const [typeOfTransport, setTypeOfTransport] = useState<string>(``)

    const onUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedTrip = Object.assign({}, trip)

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
            <label className="label-input-update">Travel Distance: <input className="number-field" type="number"
                                                                          placeholder="Add your additional Travel Distance."
                                                                          min="0"
                                                                          step="10" value={distance}
                                                                          onChange={event => setDistance(Number(event.target.value))}/>
            </label>
            <label className="label-input-update">Type of Transport: <input list="transports" className="text-field"
                                                                            type="typeOfTransport"
                                                                            placeholder="Choose your Type of Transportation."
                                                                            value={typeOfTransport}
                                                                            onChange={event => setTypeOfTransport(event.target.value)}/>
            </label>
            <datalist className="dataList-input-update" id="transports">
                <option value="Airplane"/>
                <option value="Car"/>
                <option value="Camper"/>
                <option value="Train"/>
                <option value="Bus"/>
                <option value="Motorbike"/>
                <option value="Ferry"/>
                <option value="Walking"/>
            </datalist>
            <button className={"update-transport"}>Update</button>
        </form>
    )
}