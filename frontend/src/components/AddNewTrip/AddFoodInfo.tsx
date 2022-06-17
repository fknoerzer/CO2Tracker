type FoodInfoProps = {
    typeOfDiet: string
    setTypeOfDiet: (value: string) => void
}

export default function AddFoodInfo({typeOfDiet, setTypeOfDiet}: FoodInfoProps) {


    return (
        <div className={"add-new-trip-input-overview"}>
            <label className="label-input-field">
                <h3> Please choose your type of diet </h3>
            </label>
            <select
                onChange={event => setTypeOfDiet(event.target.value)} className="dataList-input-newTrip"
                id="diets" value={typeOfDiet}>
                <option disabled>Choose here</option>
                <option value="Much Meat">Much Meat</option>
                <option selected value="Some Meat">Some Meat</option>
                <option value="Rarely Meat">Rarely Meat</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
            </select>
        </div>
    )
}