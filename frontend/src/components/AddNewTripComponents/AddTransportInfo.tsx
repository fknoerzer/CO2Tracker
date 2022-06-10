
type TransportInfoProps = {
    typeOfTransport: string
    setTypeOfTransport: (value: string) => void
}

export default function AddTransportInfo({typeOfTransport,setTypeOfTransport}: TransportInfoProps) {

    return (
        <div className={"add-new-trip-input-overview"}>
                <h3> Please choose your type of transportation</h3>
            <select className="dataList-input-newTrip" id="transports" value={typeOfTransport}
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
        </div>
    )
}