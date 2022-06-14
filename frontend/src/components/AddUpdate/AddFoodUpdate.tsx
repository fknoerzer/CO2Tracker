import {useNavigate} from "react-router-dom";
import {FormEvent, useContext, useState} from "react";
import {Food, Trip} from "../../model/Trip";
import {putTrip} from "../../service/api-service";
import {AuthContext} from "../../context/AuthProvider";

type AddFoodUpdateProps = {
    trip: Trip
}

export default function AddFoodUpdate({trip}: AddFoodUpdateProps) {
    const navigate = useNavigate()
    const [additionalDays, setAdditionalDays] = useState<number>(0)
    const [typeOfDiet, setTypeOfDiet] = useState<string>(``)
    const {token} = useContext(AuthContext)


    const onUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedTrip = {...trip}

        const newFood: Food = {
            typeOfDiet: typeOfDiet
        }

        updatedTrip.foods.push(newFood)

        putTrip(updatedTrip, token)
            .then(() => {
        setTypeOfDiet(``)
        navigate('/')
            })
            .catch(console.error)
    }
    return (
        <form className={"update-food"} onSubmit={onUpdate}>
            <label className="label-input-update">Additional Days: <input className="number-field" type="number"
                                                                            placeholder="Add your additional Days."
                                                                            min="0"
                                                                            step="1" value={additionalDays}
                                                                            onChange={event => setAdditionalDays(Number(event.target.value))}/>
            </label>
            <label className="label-input-update"> Type of Diet: <input list="diets" className="text-field" type="typeOfTransport"
                                                                         placeholder="Choose your Type of Diet"
                                                                         value={typeOfDiet}
                                                                         onChange={event => setTypeOfDiet(event.target.value)}/>
            </label>
            <select className="dataList-input-update" id="diets">
                <option value="DEFAULT" disabled>Choose here</option>
                <option value="Much Meat">Much Meat</option>
                <option value="Some Meat">Some Meat</option>
                <option value="Rarely Meat">Rarely Meat</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
            </select>
            <button className={"update-button"}>Update</button>
        </form>
    )
}