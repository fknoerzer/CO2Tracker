import {Accommodation} from "../../model/Trip";
import {ChangeEvent} from "react";

type EditAccommodationInfoProps = {
    accommodations: Accommodation[]
    setAccommodations: (value: Accommodation[]) => void
}

export default function EditAccommodationInfo({accommodations, setAccommodations}: EditAccommodationInfoProps) {

    const handleAccommodationFormChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        let data: Accommodation[] = [...accommodations];

        // @ts-ignore
        data[index][event.target.name] = (event.target.value);
        console.log(data);
        setAccommodations(data);
    }
    return (

        <div className={"edit-trip-input-overview"}>
            {accommodations.map((accommodationInput, index) => {
                return (
                    <div className={"edit-trip-input-fields"}>
                        <label className="label-input-field">
                            <h3> Please choose your type of transportation</h3>
                            <input
                                key={"typeOfAccommodation" + index}
                                list={"accommodations"}
                                className="text-field"
                                name={"typeOfAccommodation"}
                                placeholder=" Type of Accommodation"
                                value={accommodationInput.typeOfAccommodation}
                                onChange={event => handleAccommodationFormChange(event, index)}/>
                            <datalist className="dataList-input-newTrip" id="accommodations">
                                <option value="Hotel"/>
                                <option value="House"/>
                                <option value="Apartment"/>
                                <option value="Youth Hostel"/>
                                <option value="Camping Site"/>
                                <option value="Cruise Ship"/>
                            </datalist>
                        </label>
                    </div>
                )
            })}
        </div>
    )
}