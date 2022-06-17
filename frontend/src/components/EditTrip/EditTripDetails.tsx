import {Accommodation, Activity, Food, Shopping, Transportation, Trip} from "../../model/Trip";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {putTrip} from "../../service/api-service";
import EditGeneralTripInfo from "./EditGeneralTripInfo";
import EditTransportationInfo from "./EditTransportationInfo";
import EditAccommodationInfo from "./EditAccommodationInfo";
import EditFoodInfo from "./EditFoodInfo";
import EditShoppingInfo from "./EditShoppingInfo";
import EditActivityInfo from "./EditActivityInfo";
import {AuthContext} from "../../context/AuthProvider";

type EditTripDetailsProps = {
    trip: Trip
}

export default function EditTripDetails({trip}: EditTripDetailsProps) {
    const navigate = useNavigate()
    const [title, setTitle] = useState<string>(trip.title)
    const [distance, setDistance] = useState<number>(trip.transportations[0].distance)
    const [destinationCountry, setDestinationCountry] = useState<string>(trip.destinationCountry)
    const [travellerAmount, setTravellerAmount] = useState<number>(trip.travellerAmount)
    const [dateOfDeparture, setDateOfDeparture] = useState<string>(trip.dateOfDeparture)
    const [dateOfReturning, setDateOfReturning] = useState<string>(trip.dateOfReturning)
    const [personalBudget, setPersonalBudget] = useState<number>(trip.personalBudget)
    const [transportations, setTransportations] = useState<Transportation[]>(trip.transportations)
    const [accommodations, setAccommodations] = useState<Accommodation[]>(trip.accommodations)
    const [foods, setFoods] = useState<Food[]>(trip.foods)
    const [shoppings, setShoppings] = useState<Shopping[]>(trip.shoppings)
    const [activities, setActivities] = useState<Activity[]>(trip.activities)
    const {token} = useContext(AuthContext)
    const [count, setCount] = useState<number>(0)

    const onEdit = () => {

        const editedTrip: Trip = {
            title: title,
            year: trip.year,
            id: trip.id,
            destinationCountry: destinationCountry,
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
        putTrip(editedTrip, token)
            .then(() => {
                setTitle(editedTrip.title)
                setDestinationCountry(editedTrip.destinationCountry)
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
        if(count===5) {
            onEdit()
        }
        else {
        setCount(count + 1)}
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
                        <h1> Edit general infos of your trip</h1>
                        <div className={"add-new-trip-form"}>
                        <EditGeneralTripInfo title={title}
                                             setTitle={setTitle}
                                             distance={distance}
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
                        <h1> Edit transport infos of your trip</h1>
                        <div className={"add-new-trip-form"}>
                        <EditTransportationInfo transportations={transportations}
                                                setTransportations={setTransportations}/>
                    </div>
                    </div>
                )
            }


            case 2: {
                return (
                     <div className={"add-new-trip-div"}>
                    <h1> Edit accommodation Infos of your trip</h1>
                <div className={"add-new-trip-form"}>
                        <EditAccommodationInfo accommodations={accommodations}
                                               setAccommodations={setAccommodations}/>
                    </div>
                     </div>
                )
            }
            case 3: {
                return (
                    <div className={"add-new-trip-div"}>
                        <h1> Edit diet infos of your trip</h1>
                        <div className={"add-new-trip-form"}>
                        <EditFoodInfo foods={foods} setFoods={setFoods}/>
                    </div>
                    </div>
                )
            }
            case 4: {
                return (
                        <div className={"add-new-trip-div"}>
                        <h1> Edit shopping infos of your trip</h1>
                        <div className={"add-new-trip-form"}>
                        <EditShoppingInfo setShoppings={setShoppings} shoppings={shoppings}/>
                    </div>
                    </div>
                )
            }
            case 5:
                return (
                    <div className={"add-new-trip-div"}>
                        <h1> Edit activity Infos of your trip</h1>
                        <div className={"add-new-trip-form"}>
                        <EditActivityInfo activities={activities} setActivities={setActivities}/>
                    </div>
                    </div>
                )

            default: {
                return (<div>"Error"</div>)
            }
        }
    }
    return (
        <form className={"add-form"} >
            {showComponent()}
            {count===0 ? <div/> : <button type={"button"} className={"return-button"} onClick={onClickReturn}>Return</button> }
            {count===5 ? <button type={"button"} className={"add-button"} onClick={onClickNext}>Edit</button> : <button type={"button"} className={"next-button"} onClick={onClickNext}>Next</button>}
        </form>
    )
}
