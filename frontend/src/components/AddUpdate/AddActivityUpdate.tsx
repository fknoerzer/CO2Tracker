import {useNavigate} from "react-router-dom";
import {FormEvent, useContext, useState} from "react";
import {Activity, Trip} from "../../model/Trip";
import {putTrip} from "../../service/api-service";
import {AuthContext} from "../../context/AuthProvider";

type AddActivityUpdateProps = {
    trip: Trip
}

export default function AddActivityUpdate({trip}: AddActivityUpdateProps) {
    const navigate = useNavigate()
    const [amountOfGolfRounds, setAmountOfGolfRounds] = useState<number>(0)
    const [amountOfSkiingDays, setAmountOfSkiingDays] = useState<number>(0)
    const [amountOfBeautyDays, setAmountOfBeautyDays] = useState<number>(0)
    const [customActivityItem, setCustomActivityItem] = useState<string>(``)
    const [customActivityItemEmission, setCustomActivityItemEmission] = useState<number>(0)
    const [amountOfCustomActivityItem, setAmountOfCustomActivityItem] = useState<number>(0)
    const {token} = useContext(AuthContext)

    const onUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedTrip = {...trip}

        const newActivity: Activity = {
            amountOfGolfRounds: amountOfGolfRounds,
            amountOfSkiingDays: amountOfSkiingDays,
            amountOfBeautyDays: amountOfBeautyDays,
            customActivityItem: customActivityItem,
            customActivityItemEmission: customActivityItemEmission,
            amountOfCustomActivityItem: amountOfCustomActivityItem,
        }

        updatedTrip.activities.push(newActivity)

        putTrip(updatedTrip, token)
            .then(() => {
                setAmountOfGolfRounds(0)
                setAmountOfSkiingDays(0)
                setAmountOfBeautyDays(0)
                setCustomActivityItem(``)
                setCustomActivityItemEmission(0)
                setAmountOfCustomActivityItem(0)
                navigate(`/`)
            })
            .catch(console.error)
    }

    return (
        <form className={"add-update-activity"} onSubmit={onUpdate}>
            <label className="label-input-update"> Rounds of Golf: <input className="number-field"
                                                                           type="number"
                                                                           placeholder="Add additional Rounds of Golf" min="0" step="1"
                                                                           value={amountOfGolfRounds}
                                                                           onChange={event => setAmountOfGolfRounds(Number(event.target.value))}/>
            </label>
            <label className="label-input-update"> Skiing Days: <input className="number-field"
                                                                        type="number"
                                                                        placeholder="Add additionalSkiing days" min="0" step="1"
                                                                        value={amountOfSkiingDays}
                                                                        onChange={event => setAmountOfSkiingDays(Number(event.target.value))}/>
            </label>
            <label className="label-input-update"> Beauty Days:<input className="number-field"
                                                                       type="number"
                                                                       placeholder="Add additional Spa and Wellness days" min="0" step="1"
                                                                       value={amountOfBeautyDays}
                                                                       onChange={event => setAmountOfBeautyDays(Number(event.target.value))}/>
            </label>
            <label className="label-input-update"> Custom Activity Item: <input className="text-field"
                                                                                 type="customActivityItem"
                                                                                 placeholder="Add a additional Custom Activity Item"
                                                                                 value={customActivityItem}
                                                                                 onChange={event => setCustomActivityItem(event.target.value)}/>
            </label>
            <label className="label-input-update"> Amount of Custom Activity Item: <input className="number-field"
                                                                                           type="number"
                                                                                           placeholder="Add Amount of bought Custom Activity Items" min="0" step="1"
                                                                                           value={amountOfCustomActivityItem}
                                                                                           onChange={event => setAmountOfCustomActivityItem(Number(event.target.value))}/>
            </label>
            <label className="label-input-update"> Emissions of Custom Activity Item: <input className="number-field"
                                                                                              type="number"
                                                                                              placeholder="Add Emissions of your Custom Activity Item" min="0" step="0.1"
                                                                                              value={customActivityItemEmission}
                                                                                              onChange={event => setCustomActivityItemEmission(Number(event.target.value))}/>
            </label>
            <button className={"update-button"}>Update</button>
        </form>
    )
}