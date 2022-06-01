
type ShoppingInfoProps = {
    amountOfClothingItems: number
    setAmountOfClothingItems: (value: number) => void
    amountOfElectronicItems: number
    setAmountOfElectronicItems: (value: number) => void
    amountOfSouvenirItems: number
    setAmountOfSouvenirItems: (value: number) => void
    customShoppingItem: string
    setCustomShoppingItem: (value: string) => void
    customShoppingItemEmission: number
    setCustomShoppingItemEmission: (value: number) => void
    amountOfCustomShoppingItem: number
    setAmountOfCustomShoppingItem: (value: number) => void
}

export default function AddShoppingInfo({
                                            amountOfClothingItems,
                                            setAmountOfClothingItems,
                                            amountOfElectronicItems,
                                            setAmountOfElectronicItems,
                                            customShoppingItem,
                                            setCustomShoppingItem,
                                            customShoppingItemEmission,
                                            setCustomShoppingItemEmission,
                                            amountOfCustomShoppingItem,
                                            setAmountOfCustomShoppingItem,
                                            amountOfSouvenirItems,
                                            setAmountOfSouvenirItems
                                        }: ShoppingInfoProps) {

    return (
        <div className={"add-trip-shopping"}>
            <label className="label-input-newTrip"> Number of Clothing Items: <input className="number-field"
                                                                                     type="number"
                                                                                     placeholder="Add Amount of bought Clothes"
                                                                                     min="1" step="1"
                                                                                     value={amountOfClothingItems}
                                                                                     onChange={event => setAmountOfClothingItems(Number(event.target.value))}/>
            </label>
            <label className="label-input-newTrip">Number of Electric Items: <input className="number-field"
                                                                                    type="number"
                                                                                    placeholder="Add Amount of bought Electronic Devices"
                                                                                    min="1" step="1"
                                                                                    value={amountOfElectronicItems}
                                                                                    onChange={event => setAmountOfElectronicItems(Number(event.target.value))}/>
            </label>
            <label className="label-input-newTrip">Number of Souvenirs: <input className="number-field"
                                                                               type="number"
                                                                               placeholder="Add Amount of bought small Souvenirs"
                                                                               min="0" step="1"
                                                                               value={amountOfSouvenirItems}
                                                                               onChange={event => setAmountOfSouvenirItems(Number(event.target.value))}/>
            </label>
            <label className="label-input-newTrip">Custom Shopping Item: <input className="text-field"
                                                                                type="customShoppingItem"
                                                                                placeholder="Add a Custom Shopping Item"
                                                                                value={customShoppingItem}
                                                                                onChange={event => setCustomShoppingItem(event.target.value)}/>
            </label>
            <label className="label-input-newTrip"> Amount of Custom Shopping Item: <input className="number-field"
                                                                                           type="number"
                                                                                           placeholder="Add Amount of bought Custom Shopping Items"
                                                                                           min="1" step="1"
                                                                                           value={amountOfCustomShoppingItem}
                                                                                           onChange={event => setAmountOfCustomShoppingItem(Number(event.target.value))}/>
            </label>
            <label className="label-input-newTrip"> Emissions of Custom Shopping Item: <input className="number-field"
                                                                                              type="number"
                                                                                              placeholder="Add Emissions of your Custom Shopping Item"
                                                                                              min="0" step="0.1"
                                                                                              value={customShoppingItemEmission}
                                                                                              onChange={event => setCustomShoppingItemEmission(Number(event.target.value))}/>
            </label>
        </div>
    )
}