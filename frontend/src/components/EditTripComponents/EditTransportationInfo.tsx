import {ChangeEvent} from "react";
import {Transportation} from "../../model/Trip";

type EditTransportationInfoProps = {
    transportations: Transportation[]
    setTransportations: (value: Transportation[]) => void
}

export default function EditTransportationInfo({transportations, setTransportations,}: EditTransportationInfoProps) {

    const handleTransportFormChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        let data: Transportation[] = [...transportations];

        // @ts-ignore
        data[index][event.target.name] = event.target.value;
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
                                <input list={"transports"+index}
                                       className="text-field"
                                       type="typeOfTransport"
                                       placeholder=" Type of Transport"
                                       value={transportInput.typeOfTransport}
                                       onChange={event =>handleTransportFormChange(event,index)}/>
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
                })}
                </div>
                    )
                }