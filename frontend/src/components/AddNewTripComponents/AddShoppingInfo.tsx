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
        <div className={"add-new-trip-input-overview"}>
            <label className="label-input-field">
                <h3> Did you buy new clothes? </h3>
                <input className="number-field"
                       type="number"
                       placeholder="Add Amount of bought Clothes"
                       min="1" step="1"
                       value={amountOfClothingItems}
                       onChange={event => setAmountOfClothingItems(Number(event.target.value))}/> Amount of clothes
            </label>
            <label className="label-input-field"><h3> Did you buy new electronics? </h3><input className="number-field"
                                                                                               type="number"
                                                                                               placeholder="Add Amount of bought Electronic Devices"
                                                                                               min="1" step="1"
                                                                                               value={amountOfElectronicItems}
                                                                                               onChange={event => setAmountOfElectronicItems(Number(event.target.value))}/> Amount
                of electronics
            </label>
            <label className="label-input-field"><h3>Did you buy any liquor, beer or wine?</h3> <input className="number-field"
                                                                                              type="number"
                                                                                              placeholder="Add Amount of bought small Souvenirs"
                                                                                              min="0" step="0.5"
                                                                                              value={amountOfSouvenirItems}
                                                                                              onChange={event => setAmountOfSouvenirItems(Number(event.target.value))}/> Liters

            </label>
            <label className="label-input-field">
                <h3>Here you can add a custom shopping item</h3>
                <input className="text-field"
                       type="text"
                       placeholder="Add Custom Item"
                       value={customShoppingItem}
                       onChange={event => setCustomShoppingItem(event.target.value)}/>
            </label>
            <label className="label-input-field">
                <h3>Here you can add the amount of your custom shopping item</h3>
                <input className="number-field"
                       type="number"
                       placeholder="Add Amount of bought Custom Shopping Items"
                       min="1" step="1"
                       value={amountOfCustomShoppingItem}
                       onChange={event => setAmountOfCustomShoppingItem(Number(event.target.value))}/> Amount of custom item(s)
            </label>
            <label className="label-input-field">
                <h3>Here you can add the emissions of your custom shopping item</h3>
                <input className="number-field"
                       type="number"
                       placeholder="Add Emissions of your Custom Shopping Item"
                       min="0" step="0.1"
                       value={customShoppingItemEmission}
                       onChange={event => setCustomShoppingItemEmission(Number(event.target.value))}/> Emissions per
                item
            </label>
        </div>
    )
}