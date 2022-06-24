import {Accommodation} from "../../model/Trip";
import {ChangeEvent} from "react";

type EditAccommodationInfoProps = {
    accommodations: Accommodation[]
    setAccommodations: (value: Accommodation[]) => void
}

export default function EditAccommodationInfo({accommodations, setAccommodations}: EditAccommodationInfoProps) {

    const handleAccommodationFormChange = (event: ChangeEvent<HTMLSelectElement>, index: number) => {
        let data: Accommodation[] = [...accommodations];

        // @ts-ignore
        data[index][event.target.name] = (event.target.value);
        console.log(data);
        setAccommodations(data);
    }
    return (
        <div className={"add-new-trip-input-overview"}>
            {accommodations.map((accommodationInput, index) => {
                return (
                        <label className="label-input-field">
                            <div key={"typeOfAccommodation" + index}>
                            <h3> Please choose your type of transportation</h3>
                            <select className="dataList-input-newTrip" value={accommodationInput.typeOfAccommodation}
                                    name={"typeOfAccommodation"} id="accommodations"
                                    onChange={event => handleAccommodationFormChange(event, index)}>
                                <option value="DEFAULT" disabled>Choose here</option>
                                <option value="Hotel">Hotel</option>
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Youth Hostel">Youth Hostel</option>
                                <option value="Camping Site">Camping Site</option>
                                <option value="Cruise Ship">Cruise Ship</option>
                            </select>
                    </div>
                        </label>
                )
            })}
        </div>
    )
}