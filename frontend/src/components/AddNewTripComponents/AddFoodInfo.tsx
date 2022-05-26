
type FoodInfoProps = {
    typeOfDiet:string
    setTypeOfDiet: (value: string) => void
}

export default function AddFoodInfo({typeOfDiet,setTypeOfDiet}: FoodInfoProps) {



    return (
        <div className={"add-trip-Diet"}>
            Type of Diet: <input className="text-field" type="typeOfTransport"
                                      placeholder="Choose your Type of Transportation"
                                      value={typeOfDiet}
                                      onChange={event => setTypeOfDiet(event.target.value)}/>
        </div>
    )
}