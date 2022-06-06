
type AccommodationInfoProps = {
    typeOfAccommodation: string
    setTypeOfAccommodation: (value: string) => void
}

export default function AddAccommodationInfo({typeOfAccommodation, setTypeOfAccommodation}: AccommodationInfoProps) {


    return (
        <div className={"add-new-trip-input-overview"}>
            <label className="label-input-field">
                <h3> Please choose your type of transportation</h3>
                <input list="accommodations" className="text-field" type="typeOfAccommodation"
                                                                               placeholder="Type of Accommodation"
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