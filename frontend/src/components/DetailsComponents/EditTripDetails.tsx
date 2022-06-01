import {Trip} from "../../model/Trip";
import {FormEvent, useState} from "react";
import AddGeneralTripInfo from "../AddNewTripComponents/AddGeneralTripInfo";
import AddTransportInfo from "../AddNewTripComponents/AddTransportInfo";
import AddAccommodationInfo from "../AddNewTripComponents/AddAccommodationInfo";
import AddFoodInfo from "../AddNewTripComponents/AddFoodInfo";
import AddShoppingInfo from "../AddNewTripComponents/AddShoppingInfo";
import AddActivityInfo from "../AddNewTripComponents/AddActivityInfo";

type EditTripDetailsProps = {
    tripItem: Trip
    editTrip: (editedTrip: Trip) => void
}

export default function EditTripDetails({tripItem, editTrip}: EditTripDetailsProps) {
    const [title, setTitle] = useState<string>(tripItem.title)
    const [distance, setDistance] = useState<number>(tripItem.transportation.distance)
    const [destiniationCountry, setDestiniationCountry] = useState<string>(tripItem.destiniationCountry)
    const [travellerAmount, setTravellerAmount] = useState<number>(tripItem.travellerAmount)
    const [dateOfDeparture, setDateOfDeparture] = useState<string>(tripItem.dateOfDeparture)
    const [dateOfReturning, setDateOfReturning] = useState<string>(tripItem.dateOfReturning)
    const [personalBudget, setPersonalBudget] = useState<number>(tripItem.personalBudget)
    const [typeOfTransport, setTypeOfTransport] = useState<string>(tripItem.transportation.typeOfTransport)
    const [typeOfAccommodation, setTypeOfAccommodation] = useState<string>(tripItem.accommodation.typeOfAccommodation)
    const [typeOfDiet, setTypeOfDiet] = useState<string>(tripItem.food.typeOfDiet)
    const [amountOfClothingItems, setAmountOfClothingItems] = useState<number>(tripItem.shopping.amountOfClothingItems)
    const [amountOfElectronicItems, setAmountOfElectronicItems] = useState<number>(tripItem.shopping.amountOfElectronicItems)
    const [amountOfSouvenirItems, setAmountOfSouvenirItems] = useState<number>(tripItem.shopping.amountOfSouvenirItems)
    const [customShoppingItem, setCustomShoppingItem] = useState<string>(tripItem.shopping.customShoppingItem)
    const [customShoppingItemEmission, setCustomShoppingItemEmission] = useState<number>(tripItem.shopping.customShoppingItemEmission)
    const [amountOfCustomShoppingItem, setAmountOfCustomShoppingItem] = useState<number>(tripItem.shopping.amountOfCustomShoppingItem)
    const [amountOfGolfRounds, setAmountOfGolfRounds] = useState<number>(tripItem.activity.amountOfGolfRounds)
    const [amountOfSkiingDays, setAmountOfSkiingDays] = useState<number>(tripItem.activity.amountOfSkiingDays)
    const [amountOfBeautyDays, setAmountOfBeautyDays] = useState<number>(tripItem.activity.amountOfBeautyDays)
    const [customActivityItem, setCustomActivityItem] = useState<string>(tripItem.activity.customActivityItem)
    const [customActivityItemEmission, setCustomActivityItemEmission] = useState<number>(tripItem.activity.customActivityItemEmission)
    const [amountOfCustomActivityItem, setAmountOfCustomActivityItem] = useState<number>(tripItem.activity.amountOfCustomActivityItem)
    const [count, setCount] = useState<number>(0)

    const saveNewTrip = (event: FormEvent<HTMLFormElement>) =>
        event.preventDefault()

    const updatedTripItem = {
        title: title,
        year: tripItem.year,
        id: tripItem.id,
        destiniationCountry: destiniationCountry,
        travellerAmount: travellerAmount,
        dateOfDeparture: dateOfDeparture,
        dateOfReturning: dateOfReturning,
        personalBudget: personalBudget,
        transportation: {
            distance: distance,
            typeOfTransport: typeOfTransport
        },
        accommodation: {
            typeOfAccommodation: typeOfAccommodation,
        },
        food: {
            typeOfDiet: typeOfDiet
        },
        shopping: {
            amountOfClothingItems: amountOfClothingItems,
            amountOfElectronicItems: amountOfElectronicItems,
            amountOfSouvenirItems: amountOfSouvenirItems,
            customShoppingItem: customShoppingItem,
            customShoppingItemEmission: customShoppingItemEmission,
            amountOfCustomShoppingItem: amountOfCustomShoppingItem
        },
        activity: {
            amountOfGolfRounds: amountOfGolfRounds,
            amountOfSkiingDays: amountOfSkiingDays,
            amountOfBeautyDays: amountOfBeautyDays,
            customActivityItem: customActivityItem,
            customActivityItemEmission: customActivityItemEmission,
            amountOfCustomActivityItem: amountOfCustomActivityItem,
        },
        calculatedEmissions: {
            activityEmissions: tripItem.calculatedEmissions.activityEmissions,
            shoppingEmissions: tripItem.calculatedEmissions.shoppingEmissions,
            foodEmissions: tripItem.calculatedEmissions.foodEmissions,
            accommodationEmissions: tripItem.calculatedEmissions.accommodationEmissions,
            transportationEmissions: tripItem.calculatedEmissions.transportationEmissions,
            totalEmissions: tripItem.calculatedEmissions.totalEmissions,
        },

    }
    const onClickNext = () => {
        setCount(count + 1)
        showComponent()
    }

    const onClickReturn = () => {
        setCount(count - 1)
        showComponent()
    }

    const showComponent = () => {
        switch (count) {
            case 0: {
                return (
                    <form>
                        <AddGeneralTripInfo title={title}
                                            setTitle={setTitle}
                                            distance={distance}
                                            setDistance={setDistance}
                                            destiniationCountry={destiniationCountry}
                                            setDestiniationCountry={setDestiniationCountry}
                                            travellerAmount={travellerAmount}
                                            setTravellerAmount={setTravellerAmount}
                                            dateOfDeparture={dateOfDeparture}
                                            setDateOfDeparture={setDateOfDeparture}
                                            dateOfReturning={dateOfReturning}
                                            setDateOfReturning={setDateOfReturning}
                                            personalBudget={personalBudget}
                                            setPersonalBudget={setPersonalBudget}/>

                        <button type={"button"} className={"next"} onClick={onClickNext}> Next</button>
                    </form>
                )
            }
            case 1: {
                return (
                    <form>
                        <AddTransportInfo setTypeOfTransport={setTypeOfTransport}
                                          typeOfTransport={typeOfTransport}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </form>
                )
            }
            case 2: {
                return (
                    <form onSubmit={onClickNext}>
                        <AddAccommodationInfo setTypeOfAccommodation={setTypeOfAccommodation}
                                              typeOfAccommodation={typeOfAccommodation}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </form>
                )
            }
            case 3: {
                return (
                    <form onSubmit={onClickNext}>
                        <AddFoodInfo setTypeOfDiet={setTypeOfDiet} typeOfDiet={typeOfDiet}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </form>
                )
            }
            case 4: {
                return (
                    <form onSubmit={onClickNext}>
                        <AddShoppingInfo setAmountOfClothingItems={setAmountOfClothingItems}
                                         amountOfClothingItems={amountOfClothingItems}
                                         amountOfElectronicItems={amountOfElectronicItems}
                                         setAmountOfElectronicItems={setAmountOfElectronicItems}
                                         amountOfCustomShoppingItem={amountOfCustomShoppingItem}
                                         setAmountOfCustomShoppingItem={setAmountOfCustomShoppingItem}
                                         customShoppingItem={customShoppingItem}
                                         setCustomShoppingItem={setCustomShoppingItem}
                                         customShoppingItemEmission={customShoppingItemEmission}
                                         setCustomShoppingItemEmission={setCustomShoppingItemEmission}
                                         amountOfSouvenirItems={amountOfSouvenirItems}
                                         setAmountOfSouvenirItems={setAmountOfSouvenirItems}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </form>
                )
            }
            case 5:
                return (
                    <form onSubmit={saveNewTrip}>
                        <AddActivityInfo amountOfGolfRounds={amountOfGolfRounds}
                                         setAmountOfGolfRounds={setAmountOfGolfRounds}
                                         amountOfSkiingDays={amountOfSkiingDays}
                                         setAmountOfSkiingDays={setAmountOfSkiingDays}
                                         amountOfBeautyDays={amountOfBeautyDays}
                                         setAmountOfBeautyDays={setAmountOfBeautyDays}
                                         customActivityItem={customActivityItem}
                                         setAmountOfCustomActivityItem={setAmountOfCustomActivityItem}
                                         customActivityItemEmission={customActivityItemEmission}
                                         setCustomActivityItem={setCustomActivityItem}
                                         amountOfCustomActivityItem={amountOfCustomActivityItem}
                                         setCustomActivityItemEmission={setCustomActivityItemEmission}/>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                        <button className={"add-trip"} onClick={() => editTrip(updatedTripItem)}>Add Trip</button>
                    </form>
                )

            default: {
                return (<div>"Error"</div>)
            }
        }
    }
    return (
        showComponent()
    )
}