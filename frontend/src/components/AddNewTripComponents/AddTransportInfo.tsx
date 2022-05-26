
type TransportInfoProps = {
    typeOfTransport: string
    setTypeOfTransport: (value: string) => void
}

export default function AddTransportInfo({typeOfTransport,setTypeOfTransport}: TransportInfoProps) {

    return (
        <div className={"add-trip-Transport"}>
            Type of Transport: <input className="text-field" type="typeOfTransport"
                                      placeholder="Choose your Type of Transportation"
                                      value={typeOfTransport}
                                      onChange={event => setTypeOfTransport(event.target.value)}/>
        </div>
    )
}