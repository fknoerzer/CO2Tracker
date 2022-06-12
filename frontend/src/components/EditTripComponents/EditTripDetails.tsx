import {Accommodation, Activity, Food, Shopping, Transportation, Trip} from "../../model/Trip";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {putTrip} from "../../service/api-service";
import EditGeneralTripInfo from "./EditGeneralTripInfo";
import EditTransportationInfo from "./EditTransportationInfo";
import EditAccommodationInfo from "./EditAccommodationInfo";
import EditFoodInfo from "./EditFoodInfo";
import EditShoppingInfo from "./EditShoppingInfo";
import EditActivityInfo from "./EditActivityInfo";

type EditTripDetailsProps = {
    trip: Trip
}

export default function EditTripDetails({trip}: EditTripDetailsProps) {
    const navigate = useNavigate()
    const [title, setTitle] = useState<string>(trip.title)
    const [distance, setDistance] = useState<number>(trip.transportations[0].distance)
    const [destiniationCountry, setDestiniationCountry] = useState<string>(trip.destiniationCountry)
    const [travellerAmount, setTravellerAmount] = useState<number>(trip.travellerAmount)
    const [dateOfDeparture, setDateOfDeparture] = useState<string>(trip.dateOfDeparture)
    const [dateOfReturning, setDateOfReturning] = useState<string>(trip.dateOfReturning)
    const [personalBudget, setPersonalBudget] = useState<number>(trip.personalBudget)
    const [transportations, setTransportations] = useState<Transportation[]>(trip.transportations)
    const [accommodations, setAccommodations] = useState<Accommodation[]>(trip.accommodations)
    const [foods, setFoods] = useState<Food[]>(trip.foods)
    const [shoppings, setShoppings] = useState<Shopping[]>(trip.shoppings)
    const [activities, setActivities] = useState<Activity[]>(trip.activities)

    const [count, setCount] = useState<number>(0)

    const onEdit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const editedTrip: Trip = {
            title: title,
            year: trip.year,
            id: trip.id,
            destiniationCountry: destiniationCountry,
            travellerAmount: travellerAmount,
            dateOfDeparture: dateOfDeparture,
            dateOfReturning: dateOfReturning,
            personalBudget: personalBudget,
            transportations: transportations,
            accommodations: accommodations,
            foods: foods,
            shoppings: shoppings,
            activities: activities,
            calculatedEmissions: {
                activityEmissions: trip.calculatedEmissions.activityEmissions,
                shoppingEmissions: trip.calculatedEmissions.shoppingEmissions,
                foodEmissions: trip.calculatedEmissions.foodEmissions,
                accommodationEmissions: trip.calculatedEmissions.accommodationEmissions,
                transportationEmissions: trip.calculatedEmissions.transportationEmissions,
                totalEmissions: trip.calculatedEmissions.totalEmissions,
            }
        }
        putTrip(editedTrip)
            .then(() => {
                setTitle(editedTrip.title)
                setDestiniationCountry(editedTrip.destiniationCountry)
                setDistance(editedTrip.transportations[0].distance)
                setTravellerAmount(editedTrip.travellerAmount)
                setDateOfDeparture(editedTrip.dateOfDeparture)
                setDateOfReturning(editedTrip.dateOfReturning)
                setPersonalBudget(editedTrip.personalBudget)
                setTransportations(editedTrip.transportations)
                setAccommodations(editedTrip.accommodations)
                setFoods(editedTrip.foods)
                setActivities(editedTrip.activities)
                setShoppings(editedTrip.shoppings)
                navigate("/")
            })
            .catch(console.error)
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
                    <div>
                        <EditGeneralTripInfo title={title}
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
                    </div>
                )
            }
            case 1: {
                return (
                    <div>
                        <EditTransportationInfo transportations={transportations}
                                                setTransportations={setTransportations}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </div>
                )
            }


            case 2: {
                return (
                    <div>
                        <EditAccommodationInfo accommodations={accommodations}
                                               setAccommodations={setAccommodations}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </div>
                )
            }
            case 3: {
                return (
                    <div>
                        <EditFoodInfo foods={foods} setFoods={setFoods}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </div>
                )
            }
            case 4: {
                return (
                    <div>
                        <EditShoppingInfo setShoppings={setShoppings} shoppings={shoppings}/>
                        <button type={"button"} className={"next"} onClick={onClickNext}>Next</button>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                    </div>
                )
            }
            case 5:
                return (
                    <div>
                        <EditActivityInfo activities={activities} setActivities={setActivities}/>
                        <button type={"button"} className={"return"} onClick={onClickReturn}>Return</button>
                        <button type={"submit"} className={"edit-trip"}>Edit Trip</button>
                    </div>
                )

            default: {
                return (<div>"Error"</div>)
            }
        }
    }
    return (
        <form onSubmit={onEdit} >
            {showComponent()}
        </form>
    )
}
