import {Food} from "../../model/Trip";
import {ChangeEvent} from "react";

type EditFoodInfoProps = {
    foods: Food[]
    setFoods: (value: Food[]) => void
}

export default function EditFoodInfo({foods, setFoods}: EditFoodInfoProps) {

    const handleTransportFormChange = (event: ChangeEvent<HTMLSelectElement>, index: number) => {
        let data: Food[] = [...foods];

        // @ts-ignore
        data[index][event.target.name] = (event.target.value);
        console.log(data);
        setFoods(data);

    }
    return (
        <div className={"add-new-trip-input-overview"}>
            {foods.map((foodsInput, index) => {
                return (
                    <label className="label-input-field">
                    <div key={"typeOfDiet" + index} className={"edit-trip-input-fields"}>
                            <h3> Please choose your type of diet</h3>
                            <select className="dataList-input-newTrip" id="food" value={foodsInput.typeOfDiet}
                                    name={"typeOfDiet"} onChange={event => handleTransportFormChange(event, index)}>
                                <option value="DEFAULT" disabled>Choose here</option>
                                <option value="Much Meat">Much Meat</option>
                                <option value="Some Meat">Some Meat</option>
                                <option value="Rarely Meat">Rarely Meat</option>
                                <option value="Vegetarian">Vegetarian</option>
                                <option value="Vegan">Vegan</option>
                            </select>
                    </div>
                    </label>
                )
            })}
        </div>
    )
}