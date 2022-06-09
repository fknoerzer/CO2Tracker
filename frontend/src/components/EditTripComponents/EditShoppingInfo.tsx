import {ChangeEvent} from "react";
import {Shopping} from "../../model/Trip";

type EditShoppingInfoProps = {
    shoppings: Shopping[]
    setShoppings: (value: Shopping[]) => void
}

export default function EditShoppingInfo({shoppings, setShoppings}: EditShoppingInfoProps) {

    const handleShoppingFormChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        let data: Shopping[] = [...shoppings];

        // @ts-ignore
        data[index][event.target.name] = (event.target.value);
        console.log(data);
        setShoppings(data);

    }
    return (
        <div className={"edit-trip-input-overview"}>
            {shoppings.map((shoppingInput, index) => {
                return (
                    <div className={"edit-trip-input-fields"}>
                        <label className="label-input-field">
                            <h3> Did you buy new clothes? </h3>
                            <input className="number-field"
                                   type="number"
                                   name={"amountOfClothingItems"}
                                   placeholder="Add Amount of bought Clothes"
                                   min="0" step="1"
                                   value={shoppingInput.amountOfClothingItems}
                                   onChange={event => handleShoppingFormChange(event, index)}/> Amount of clothes
                        </label>
                        <label className="label-input-field">
                            <h3> Did you buy new electronics? </h3>
                            <input className="number-field"
                                   type="number"
                                   name={"amountOfElectronicItems"}
                                   placeholder="Add Amount of bought Electronic Devices"
                                   min="0" step="1"
                                   value={shoppingInput.amountOfElectronicItems}
                                   onChange={event => handleShoppingFormChange(event, index)}/> Amount
                            of electronics
                        </label>
                        <label className="label-input-field"><h3>Did you buy any liquor, beer or wine?</h3> <input
                            className="number-field"
                            type="number"
                            name={"amountOfSouvenirItems"}
                            placeholder="Add Amount of bought small Souvenirs"
                            min="0" step="0.5"
                            value={shoppingInput.amountOfSouvenirItems}
                            onChange={event => handleShoppingFormChange(event, index)}/> Liters

                        </label>
                        <label className="label-input-field">
                            <h3>Here you can add a custom shopping item</h3>
                            <input className="text-field"
                                   type="text"
                                   name={"customShoppingItem"}
                                   placeholder="Add Custom Item"
                                   value={shoppingInput.customShoppingItem}
                                   onChange={event => handleShoppingFormChange(event, index)}/>
                        </label>
                        <label className="label-input-field">
                            <h3>Here you can add the amount of your custom shopping item</h3>
                            <input className="number-field"
                                   type="number"
                                   name={"amountOfCustomShoppingItem"}
                                   placeholder="Add Amount of bought Custom Shopping Items"
                                   min="0" step="1"
                                   value={shoppingInput.amountOfCustomShoppingItem}
                                   onChange={event => handleShoppingFormChange(event, index)}/> Amount
                            of custom item(s)
                        </label>
                        <label className="label-input-field">
                            <h3>Here you can add the emissions of your custom shopping item</h3>
                            <input className="number-field"
                                   type="number"
                                   name={"customShoppingItemEmission"}
                                   placeholder="Add Emissions of your Custom Shopping Item"
                                   min="0" step="0.1"
                                   value={shoppingInput.customShoppingItemEmission}
                                   onChange={event => handleShoppingFormChange(event, index)}/> Emissions
                            per
                            item
                        </label>
                    </div>)
            })})
        </div>)
}