import "./styles/AddCard.css"

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
            Number of Clothing Items: <input className="number-field" type="NumberOfClothingItems"
                                             placeholder="Add Amount of bought Clothes" value={amountOfClothingItems}
                                             onChange={event => setAmountOfClothingItems(Number(event.target.value))}/>

            Number of Electric Items: <input className="number-field" type="NumberOfElectronicItems"
                                             placeholder="Add Amount of bought Electronic Devices"
                                             value={amountOfElectronicItems}
                                             onChange={event => setAmountOfElectronicItems(Number(event.target.value))}/>

            Number of Souvenirs: <input className="number-field" type="NumberOfSouvenirItems"
                                        placeholder="Add Amount of bought small Souvenirs" value={amountOfSouvenirItems}
                                        onChange={event => setAmountOfSouvenirItems(Number(event.target.value))}/>

            Custom Shopping Item: <input className="text-field" type="customShoppingItem"
                                         placeholder="Add a Custom Shopping Item" value={customShoppingItem}
                                         onChange={event => setCustomShoppingItem(event.target.value)}/>

            Amount of Custom Shopping Item: <input className="number-field" type="AmountOfCustomShoppingItem"
                                                   placeholder="Add Amount of bought Custom Shopping Items"
                                                   value={amountOfCustomShoppingItem}
                                                   onChange={event => setAmountOfCustomShoppingItem(Number(event.target.value))}/>

            Emissions of Custom Shopping Item: <input className="number-field"
                                                      type="AmountOfCustomShoppingItemEmissions"
                                                      placeholder="Add Emissions of your Custom Shopping Item"
                                                      value={customShoppingItemEmission}
                                                      onChange={event => setCustomShoppingItemEmission(Number(event.target.value))}/>

        </div>
    )
}