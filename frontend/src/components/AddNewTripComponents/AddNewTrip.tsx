import {useState} from "react";
import {TripDto} from "../../model/TripDto";
import "./styles/AddNewTrip.css"
import AddGeneralTripInfo from "./AddGeneralTripInfo";
import AddTransportInfo from "./AddTransportInfo";
import AddAccommodationInfo from "./AddAccommodationInfo";
import AddFoodInfo from "./AddFoodInfo";
import AddShoppingInfo from "./AddShoppingInfo";
import AddActivityInfo from "./AddActivityInfo";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

type NewTripProps = {
    addNewTrip: (newTrip: TripDto) => void
}

export default function AddNewTrip({addNewTrip}: NewTripProps) {
    const navigate = useNavigate()
    const [title, setTitle] = useState<string>(``)
    const [distance, setDistance] = useState<number>(0)
    const [destiniationCountry, setDestiniationCountry] = useState<string>(``)
    const [travellerAmount, setTravellerAmount] = useState<number>(1)
    const [dateOfDeparture, setDateOfDeparture] = useState<string>(``)
    const [dateOfReturning, setDateOfReturning] = useState<string>(``)
    const [personalBudget, setPersonalBudget] = useState<number>(500)
    const [typeOfTransport, setTypeOfTransport] = useState<string>(``)
    const [typeOfAccommodation, setTypeOfAccommodation] = useState<string>(``)
    const [typeOfDiet, setTypeOfDiet] = useState<string>(``)
    const [amountOfClothingItems, setAmountOfClothingItems] = useState<number>(0)
    const [amountOfElectronicItems, setAmountOfElectronicItems] = useState<number>(0)
    const [amountOfSouvenirItems, setAmountOfSouvenirItems] = useState<number>(0)
    const [customShoppingItem, setCustomShoppingItem] = useState<string>(``)
    const [customShoppingItemEmission, setCustomShoppingItemEmission] = useState<number>(0)
    const [amountOfCustomShoppingItem, setAmountOfCustomShoppingItem] = useState<number>(0)
    const [amountOfGolfRounds, setAmountOfGolfRounds] = useState<number>(0)
    const [amountOfSkiingDays, setAmountOfSkiingDays] = useState<number>(0)
    const [amountOfBeautyDays, setAmountOfBeautyDays] = useState<number>(0)
    const [customActivityItem, setCustomActivityItem] = useState<string>(``)
    const [customActivityItemEmission, setCustomActivityItemEmission] = useState<number>(0)
    const [amountOfCustomActivityItem, setAmountOfCustomActivityItem] = useState<number>(0)
    const [count, setCount] = useState<number>(0)


    const onAdd = () => {


        const newTrip: TripDto = {
            title: title,
            destiniationCountry: destiniationCountry,
            travellerAmount: travellerAmount,
            dateOfDeparture: dateOfDeparture,
            dateOfReturning: dateOfReturning,
            personalBudget: personalBudget,
            transportations: [{
                distance: distance,
                typeOfTransport: typeOfTransport
            }],
            accommodations: [{
                typeOfAccommodation: typeOfAccommodation,
            }],
            foods: [{
                typeOfDiet: typeOfDiet
            }],
            shoppings: [{
                amountOfClothingItems: amountOfClothingItems,
                amountOfElectronicItems: amountOfElectronicItems,
                amountOfSouvenirItems: amountOfSouvenirItems,
                customShoppingItem: customShoppingItem,
                customShoppingItemEmission: customShoppingItemEmission,
                amountOfCustomShoppingItem: amountOfCustomShoppingItem
            }],
            activities: [{
                amountOfGolfRounds: amountOfGolfRounds,
                amountOfSkiingDays: amountOfSkiingDays,
                amountOfBeautyDays: amountOfBeautyDays,
                customActivityItem: customActivityItem,
                customActivityItemEmission: customActivityItemEmission,
                amountOfCustomActivityItem: amountOfCustomActivityItem,
            }]
        }
        addNewTrip(newTrip)
        setTitle(``)
        setDestiniationCountry(``)
        setDistance(0)
        setTravellerAmount(1)
        setDateOfDeparture(``)
        setDateOfReturning(``)
        setPersonalBudget(500)
        setTypeOfTransport(``)
        setTypeOfAccommodation(``)
        setTypeOfDiet(``)
        setAmountOfClothingItems(0)
        setAmountOfElectronicItems(0)
        setAmountOfSouvenirItems(0)
        setCustomShoppingItem(``)
        setCustomShoppingItemEmission(0)
        setAmountOfCustomShoppingItem(0)
        setAmountOfGolfRounds(0)
        setAmountOfSkiingDays(0)
        setAmountOfBeautyDays(0)
        setCustomActivityItem(``)
        setCustomActivityItemEmission(0)
        setAmountOfCustomActivityItem(0)
        navigate(`/`)

    }

    const onClickNext = () => {
        if (!title) {
            toast.error("Title for Trip is required.")

        } else if (!dateOfDeparture) {
            toast.error("Date of Departure for your Trip is required.")

        } else if (!dateOfReturning) {
            toast.error("Date of Return for your Trip is required.")

        } else if (!typeOfTransport && count >= 1) {
            toast.error("Type of Transport for your Trip is required.")

        } else if (!typeOfAccommodation && count >= 2) {
            toast.error("Type of Accommodation for your Trip is required.")

        } else if (!typeOfDiet && count >= 3) {
            toast.error("Type of Diet for your Trip is required.")

        } else {
            setCount(count + 1)
        }
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
                                            setTitle={setTitle} distance={distance}
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

                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
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
                    <form>
                        <AddAccommodationInfo setTypeOfAccommodation={setTypeOfAccommodation}
                                              typeOfAccommodation={typeOfAccommodation}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </form>
                )
            }
            case 3: {
                return (
                    <form>
                        <AddFoodInfo setTypeOfDiet={setTypeOfDiet} typeOfDiet={typeOfDiet}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </form>
                )
            }
            case 4: {
                return (
                    <form>
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
                    <form>
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
                        <button type={"button"} className={"add-trip"} onClick={onAdd}>Add Trip</button>
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
