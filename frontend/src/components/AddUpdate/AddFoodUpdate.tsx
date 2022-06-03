import {useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";
import {TripUpdateFoodEmissionsDto} from "../../model/updateDtos/TripUpdateFoodEmissionsDto";
import {Food, Trip} from "../../model/Trip";
import {putTrip} from "../../service/api-service";

type AddFoodUpdateProps = {
    trip: Trip
    updateFoodEmissions: (id: string, tripUpdateFoodEmissionsDto: TripUpdateFoodEmissionsDto) => void
}

export default function AddFoodUpdate({updateFoodEmissions, trip}: AddFoodUpdateProps) {
    const navigate = useNavigate()
    const [additionalDays, setAdditionalDays] = useState<number>(0)
    const [typeOfDiet, setTypeOfDiet] = useState<string>(``)

    const onUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedTrip = Object.assign({}, trip)

        const newFood: Food = {
            typeOfDiet: typeOfDiet
        }

        updatedTrip.foods.push(newFood)

        putTrip(updatedTrip)
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
            <datalist className="dataList-input-update" id="diets">
                <option value="Much Meat"/>
                <option value="Some Meat"/>
                <option value="Rarely Meat"/>
                <option value="Vegetarian"/>
                <option value="Vegan"/>
            </datalist>
            <button className={"update-food"}>Update</button>
        </form>
    )
}