import {ChangeEvent} from "react";
import {Transportation} from "../../model/Trip";

type EditTransportationInfoProps = {
    transportations: Transportation[]
    setTransportations: (value: Transportation[]) => void
}

export default function EditTransportationInfo({transportations, setTransportations}: EditTransportationInfoProps) {

    const handleTransportFormSelectChange = (event: ChangeEvent<HTMLSelectElement>, index: number) => {
        let data: Transportation[] = [...transportations];

        // @ts-ignore
        data[index][event.target.name] = (event.target.value);
        console.log(data);
        setTransportations(data);
    }

    const handleTransportFormInputChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        let data: Transportation[] = [...transportations];

        // @ts-ignore
        data[index][event.target.name] = (event.target.value);
        console.log(data);
        setTransportations(data);
    }

    return (
        <div className={"edit-trip-input-overview"}>
            {transportations.map((transportInput, index) => {
                return (
                    <div key={"typeOfTransport" + index} className={"edit-trip-input-fields"}>
                        <label className="label-input-field">
                            <h3> Please choose your type of transportation</h3>
                            <select className="dataList-input-newTrip" id="transport"
                                    value={transportInput.typeOfTransport}
                                    name={"typeOfTransport"}
                                    onChange={event => handleTransportFormSelectChange(event, index)}>
                                <option value="DEFAULT" disabled>Choose here</option>
                                <option value="Airplane">Airplane</option>
                                <option value="Car">Car</option>
                                <option value="Camper">Airplane</option>
                                <option value="Train">Airplane</option>
                                <option value="Bus">Airplane</option>
                                <option value="Motorbike">Airplane</option>
                                <option value="Ferry">Airplane</option>
                                <option value="Walking">Airplane</option>
                            </select>
                            <h3>Please add your travel distance</h3>
                            <input className="number-field"
                                   name={"distance"}
                                   type="number"
                                   min="0"
                                   step="10"
                                   value={transportInput.distance}
                                   onChange={event => handleTransportFormInputChange(event, index)}/> km (Roundtrip)
                        </label>
                    </div>
                )
            })}
        </div>
    )
}