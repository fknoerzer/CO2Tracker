type FoodInfoProps = {
    typeOfDiet: string
    setTypeOfDiet: (value: string) => void
}

export default function AddFoodInfo({typeOfDiet, setTypeOfDiet}: FoodInfoProps) {


    return (
        <div className={"add-trip-Diet"}>
            <label className="label-input-newTrip"> Type of Diet: <input list="diets" className="text-field" type="typeOfTransport"
                                         placeholder="Choose your Type of Transportation"
                                         value={typeOfDiet}
                                         onChange={event => setTypeOfDiet(event.target.value)}/>
            </label>
            <datalist className="dataList-input-newTrip" id="diets">
                <option value="Much Meat"/>
                <option value="Some Meat"/>
                <option value="Rarely Meat"/>
                <option value="Vegetarian"/>
                <option value="Vegan"/>
            </datalist>
        </div>
    )
}