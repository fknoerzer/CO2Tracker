import {FormEvent, useState} from "react";
import {TripDto} from "../model/TripDto";


type NewTripProps = {
    addNewTrip: (newTrip: TripDto) => void
}

export default function AddNewTrip({addNewTrip}: NewTripProps) {
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


    const onAdd = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const newTrip: TripDto = {
            title: title,
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
            activities: {
                amountOfGolfRounds: amountOfGolfRounds,
                amountOfSkiingDays: amountOfSkiingDays,
                amountOfBeautyDays: amountOfBeautyDays,
                customActivityItem: customActivityItem,
                customActivityItemEmission: customActivityItemEmission,
                amountOfCustomActivityItem: amountOfCustomActivityItem,
            }
        }
        addNewTrip(newTrip);
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
    }


    return (
        <div className={"add-trip"}>
            <form onSubmit={onAdd}>
                <input className="text-field" type="title" placeholder="Add a title for your Trip" value={title}
                       onChange={event => setTitle(event.target.value)}/>

                <input className="text-field" type="destinationCountry" placeholder="Add your Country of Destination" value={destiniationCountry}
                       onChange={event => setDestiniationCountry(event.target.value)}/>

                <input className="number-field" type="distance" placeholder="Add your Travel Distance (Round Trip)"  min="1"  step="10" value={distance}
                       onChange={event => setDistance(Number(event.target.value))}/>

                <input className="number-field" type="travellerAmount" placeholder="Number of Travellers"  min="1"  step="1" value={travellerAmount}
                       onChange={event => setTravellerAmount(Number(event.target.value))}/>

                <input className="number-field" type="distance" placeholder="Add your Travel Distance (Round Trip)"  min="1"  step="10" value={distance}
                       onChange={event => setDistance(Number(event.target.value))}/>

                <input className="text-field" type="dateOfDeparture" placeholder="Add your Date of Departure" value={dateOfDeparture}
                       onChange={event => setDateOfDeparture(event.target.value)}/>

                <input className="text-field" type="dateOfReturning" placeholder="Add your Date of Returning" value={dateOfReturning}
                       onChange={event => setDateOfReturning(event.target.value)}/>

                <input className="number-field" type="personalBudget" placeholder="Add your personal CO2-Budget for this Trip"  min="1"  step="10" value={personalBudget}
                       onChange={event => setPersonalBudget(Number(event.target.value))}/>

                <input className="text-field" type="typeOfTransport" placeholder="Choose your Type of Transportation" value={typeOfTransport}
                       onChange={event => setTypeOfTransport(event.target.value)}/>

                <input className="text-field" type="typeOfAccommodation" placeholder="Choose your Type of Accommodation" value={typeOfAccommodation}
                       onChange={event => setTypeOfAccommodation(event.target.value)}/>

                <input className="text-field" type="typeOfDiet" placeholder="Choose your Type of Diet" value={typeOfDiet}
                       onChange={event => setTypeOfDiet(event.target.value)}/>

                <input className="number-field" type="NumberOfClothingItems" placeholder="Add Amount of bought Clothes"  value={amountOfClothingItems}
                       onChange={event => setAmountOfClothingItems(Number(event.target.value))}/>

                <input className="number-field" type="NumberOfElectronicItems" placeholder="Add Amount of bought Electronic Devices"  value={amountOfElectronicItems}
                       onChange={event => setAmountOfElectronicItems(Number(event.target.value))}/>

                <input className="number-field" type="NumberOfSouvenirItems" placeholder="Add Amount of bought small Souvenirs"  value={amountOfSouvenirItems}
                       onChange={event => setAmountOfElectronicItems(Number(event.target.value))}/>

                <input className="text-field" type="customShoppingItem" placeholder="Add a Custom Shopping Item" value={customShoppingItem}
                       onChange={event => setCustomShoppingItem(event.target.value)}/>

                <input className="number-field" type="AmountOfCustomShoppingItem" placeholder="Add Amount of bought Custom Shopping Items"  value={amountOfCustomShoppingItem}
                       onChange={event => setAmountOfCustomShoppingItem(Number(event.target.value))}/>

                <input className="number-field" type="AmountOfCustomShoppingItemEmissions" placeholder="Add Emissions of your Custom Shopping Item"  value={customShoppingItemEmission}
                       onChange={event => setCustomShoppingItemEmission(Number(event.target.value))}/>

                <input className="number-field" type="AmountOfGolfRounds" placeholder="Add Rounds of Golf"  value={amountOfGolfRounds}
                       onChange={event => setAmountOfGolfRounds(Number(event.target.value))}/>

                <input className="number-field" type="AmountOfSkiingDays" placeholder="Add Skiing days"  value={amountOfSkiingDays}
                       onChange={event => setAmountOfSkiingDays(Number(event.target.value))}/>

                <input className="number-field" type="AmountOfBeautyDays" placeholder="Add Spa and Wellness days"  value={amountOfBeautyDays}
                       onChange={event => setAmountOfBeautyDays(Number(event.target.value))}/>

                <input className="text-field" type="customActivityItem" placeholder="Add a Custom Activity Item" value={customActivityItem}
                       onChange={event => setCustomActivityItem(event.target.value)}/>

                <input className="number-field" type="AmountOfCustomActivityItem" placeholder="Add Amount of bought Custom Activity Items"  value={amountOfCustomShoppingItem}
                       onChange={event => setAmountOfCustomActivityItem(Number(event.target.value))}/>

                <input className="number-field" type="AmountOfCustomActivityItemEmissions" placeholder="Add Emissions of your Custom Activity Item"  value={customActivityItemEmission}
                       onChange={event => setCustomActivityItemEmission(Number(event.target.value))}/>

                <input type={"submit"} value={"Add Trip"}/>
            </form>
        </div>
    )
}