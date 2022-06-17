import {useContext, useState} from "react";
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
import {AuthContext} from "../../context/AuthProvider";
import {postTrip} from "../../service/api-service";

export default function AddNewTrip() {
    const navigate = useNavigate()
    const [title, setTitle] = useState<string>(``)
    const [distance, setDistance] = useState<number>(0)
    const [destinationCountry, setDestinationCountry] = useState<string>(``)
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
    const {token} = useContext(AuthContext)

    const onAdd = () => {

        const newTrip: TripDto = {
            title: title,
            destinationCountry: destinationCountry,
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
        postTrip(newTrip, token)
            .then(() => {
                setTitle(``)
                setDestinationCountry(``)
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
            })
            .catch(console.error)
    }

    const onClickNext = () => {
        if (!title) {
            toast.error("Title for Trip is required.")

        } else if (!dateOfDeparture) {
            toast.error("Date of Departure for your Trip is required.")


        } else if (!destinationCountry) {
            toast.error("Country of Destination for your Trip is required.")

        } else if (!dateOfReturning) {
            toast.error("Date of Return for your Trip is required.")
        }

        else if(count===5) {
            onAdd()
        }
        else {
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
                    <div className={"add-new-trip-div"}>
                        <h1> Add general infos to your new trip</h1>
                        <div className={"add-new-trip-form"}>
                            <AddGeneralTripInfo title={title}
                                                setTitle={setTitle} distance={distance}
                                                setDistance={setDistance}
                                                destinationCountry={destinationCountry}
                                                setDestinationCountry={setDestinationCountry}
                                                travellerAmount={travellerAmount}
                                                setTravellerAmount={setTravellerAmount}
                                                dateOfDeparture={dateOfDeparture}
                                                setDateOfDeparture={setDateOfDeparture}
                                                dateOfReturning={dateOfReturning}
                                                setDateOfReturning={setDateOfReturning}
                                                personalBudget={personalBudget}
                                                setPersonalBudget={setPersonalBudget}/>
                        </div>
                    </div>
                )
            }
            case 1: {
                return (
                    <div className={"add-new-trip-div"}>
                        <h1> Add transport infos to your new trip</h1>
                        <div className={"add-new-trip-form"}>
                            <AddTransportInfo setTypeOfTransport={setTypeOfTransport}
                                              typeOfTransport={typeOfTransport}/>
                        </div>
                    </div>
                )
            }
            case 2: {
                return (
                    <div className={"add-new-trip-div"}>
                        <h1> Add accommodation Infos to your new trip</h1>
                        <div className={"add-new-trip-form"}>
                            <AddAccommodationInfo setTypeOfAccommodation={setTypeOfAccommodation}
                                                  typeOfAccommodation={typeOfAccommodation}/>
                        </div>
                    </div>
                )
            }
            case 3: {
                return (
                    <div className={"add-new-trip-div"}>
                        <h1> Add diet infos to your new trip</h1>
                        <div className={"add-new-trip-form"}>
                            <AddFoodInfo setTypeOfDiet={setTypeOfDiet} typeOfDiet={typeOfDiet}/>
                        </div>
                    </div>
                )
            }
            case 4: {
                return (
                    <div className={"add-new-trip-div"}>
                        <h1> Add shopping infos to your new trip</h1>
                        <div className={"add-new-trip-form"}>
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
                        </div>

                    </div>
                )
            }
            case 5:
                return (
                    <div className={"add-new-trip-div"}>
                        <h1> Add activity Infos to your new trip</h1>
                        <div className={"add-new-trip-form"}>
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
                        </div>
                    </div>
                )
            default: {
                return (<div>"Error"</div>)
            }
        }
    }

    return (
        <form className={"add-form"}>
            {showComponent()}
            {count===0 ? <div/> : <button type={"button"} className={"return-button"} onClick={onClickReturn}>Return</button> }
            {count===5 ? <button type={"button"} className={"add-button"} onClick={onClickNext}>Add</button> : <button type={"button"} className={"next-button"} onClick={onClickNext}>Next</button>}
                </form>
    )
}
