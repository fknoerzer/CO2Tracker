type AccommodationInfoProps = {
    typeOfAccommodation: string
    setTypeOfAccommodation: (value: string) => void
}

export default function AddAccommodationInfo({typeOfAccommodation, setTypeOfAccommodation}: AccommodationInfoProps) {


    return (
        <div className={"add-new-trip-input-overview"}>
            <label className="label-input-field">
                <h3> Please choose your type of accommodation</h3>
            </label>
            <select className="dataList-input-newTrip" id="accommodations" placeholder="Type of Accommodation"
                    value={typeOfAccommodation}
                    onChange={event => setTypeOfAccommodation(event.target.value)}>
                <option value="DEFAULT" disabled>Choose here</option>
                <option value="Hotel">Hotel</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Youth Hostel">Youth Hostel</option>
                <option value="Camping Site">Camping Site</option>
                <option value="Cruise Ship">Cruise Ship</option>
            </select>
        </div>
    )
}