import 'bootstrap'

type TransportInfoProps = {
    typeOfAccommodation: string
    setTypeOfAccommodation: (value: string) => void
}

export default function AddAccommodationInfo({typeOfAccommodation, setTypeOfAccommodation}: TransportInfoProps) {


    return (
        <div className={"add-trip-Accommodation"}>
            Type of Accommodation: <input className="text-field" type="typeOfAccommodation"
                                          placeholder="Choose your Type of Accommodation"
                                          value={typeOfAccommodation}
                                          onChange={event => setTypeOfAccommodation(event.target.value)}>
        </input>
        </div>
    )
}