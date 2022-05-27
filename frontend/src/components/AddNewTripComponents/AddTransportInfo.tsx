
type TransportInfoProps = {
    typeOfTransport: string
    setTypeOfTransport: (value: string) => void
}

export default function AddTransportInfo({typeOfTransport,setTypeOfTransport}: TransportInfoProps) {

    return (
        <div className={"add-trip-Transport"}>
            <label className="label-input-newTrip">Type of Transport: <input list="transports" className="text-field" type="typeOfTransport"
                                      placeholder="Choose your Type of Transportation"
                                      value={typeOfTransport}
                                      onChange={event => setTypeOfTransport(event.target.value)}/>
            </label>
            <datalist className="dataList-input-newTrip" id="transports">
                <option value="Airplane"/>
                <option value="Car"/>
                <option value="Camper"/>
                <option value="Train"/>
                <option value="Bus"/>
                <option value="Motorbike"/>
                <option value="Ferry"/>
                <option value="Walking"/>
            </datalist>
        </div>
    )
}