import 'bootstrap'

type AccommodationInfoProps = {
    typeOfAccommodation: string
    setTypeOfAccommodation: (value: string) => void
}

export default function AddAccommodationInfo({typeOfAccommodation, setTypeOfAccommodation}: AccommodationInfoProps) {


    return (
        <div className={"add-trip-Accommodation"}>
            <label className="label-input-newTrip">Type of Accommodation: <input list="accommodations" className="text-field" type="typeOfAccommodation"
                                                 placeholder="Choose your Type of Accommodation"
                                                 value={typeOfAccommodation}
                                                 onChange={event => setTypeOfAccommodation(event.target.value)}/>
            </label>
            <datalist className="dataList-input-newTrip" id="accommodations">
                <option value="Hotel"/>
                <option value="House"/>
                <option value="Apartment"/>
                <option value="Youth Hostel"/>
                <option value="Camping Site"/>
                <option value="Cruise Ship"/>
            </datalist>
        </div>
    )
}