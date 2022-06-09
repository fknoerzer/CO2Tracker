import {ChangeEvent} from "react";
import {Transportation} from "../../model/Trip";

type EditTransportationInfoProps = {
    transportations: Transportation[]
    setTransportations: (value: Transportation[]) => void
}

export default function EditTransportationInfo({transportations, setTransportations}: EditTransportationInfoProps) {

    const handleTransportFormChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        let data: Transportation[] = [...transportations];

        // @ts-ignore
        data[index][event.target.name] =(event.target.value);
        console.log(data);
        setTransportations(data);

    }
    return (
        <div className={"edit-trip-input-overview"}>
            {transportations.map((transportInput, index) => {
                return (
                    <div className={"edit-trip-input-fields"}>
                        <label className="label-input-field">
                            <h3> Please choose your type of transportation</h3>
                            <input
                                key={"typeOfTransport" + index}
                                list={"transports"}
                                className="text-field"
                                name={"typeOfTransport"}
                                placeholder=" Type of Transport"
                                value={transportInput.typeOfTransport}
                                onChange={event => handleTransportFormChange(event, index)}/>
                            <datalist  className="dataList-input-newTrip" id="transports">
                                <option value="Airplane"/>
                                <option value="Car"/>
                                <option value="Camper"/>
                                <option value="Train"/>
                                <option value="Bus"/>
                                <option value="Motorbike"/>
                                <option value="Ferry"/>
                                <option value="Walking"/>
                            </datalist>
                            <h3>Please add your travel distance</h3>
                            <input className="number-field"
                                   name={"distance"}
                                   type="number"
                                   min="0"
                                   step="10"
                                   value={transportInput.distance}
                                   onChange={event => handleTransportFormChange(event, index)}/> km (Roundtrip)
                        </label>
                    </div>
                )
            })}
        </div>
    )
}