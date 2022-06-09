import {Food} from "../../model/Trip";
import {ChangeEvent} from "react";

type EditFoodInfoProps = {
    foods: Food[]
    setFoods: (value: Food[]) => void
}

export default function EditFoodInfo({foods, setFoods}: EditFoodInfoProps) {

    const handleTransportFormChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        let data: Food[] = [...foods];

        // @ts-ignore
        data[index][event.target.name] =(event.target.value);
        console.log(data);
        setFoods(data);

    }
    return (
        <div className={"edit-trip-input-overview"}>
            {foods.map((foodsInput, index) => {
                return (
                    <div className={"edit-trip-input-fields"}>
                        <label className="label-input-field">
                            <h3> Please choose your type of diet</h3>
                            <input
                                key={"typeOfDiet" + index}
                                list={"foods"}
                                className="text-field"
                                name={"typeOfDiet"}
                                placeholder=" Type of Transport"
                                value={foodsInput.typeOfDiet}
                                onChange={event => handleTransportFormChange(event, index)}/>
                            <datalist  className="dataList-input-newTrip" id="foods">
                                <option value="Much Meat"/>
                                <option value="Some Meat"/>
                                <option value="Rarely Meat"/>
                                <option value="Vegetarian"/>
                                <option value="Vegan"/>
                            </datalist>
                        </label>
                    </div>
                )
            })}
        </div>
    )
}