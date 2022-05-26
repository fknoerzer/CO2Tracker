
type TripGeneralInfoProps = {
    title: string
    setTitle: (value: string) => void
    distance: number
    setDistance: (value: number) => void
    destiniationCountry: string
    setDestiniationCountry: (value: string) => void
    travellerAmount: number
    setTravellerAmount: (value: number) => void
    dateOfDeparture: string
    setDateOfDeparture: (value: string) => void
    dateOfReturning: string
    setDateOfReturning: (value: string) => void
    personalBudget: number
    setPersonalBudget: (value: number) => void
}

export default function AddTripGeneralInfo({
                                               title,
                                               setTitle,
                                               distance,
                                               setDistance,
                                               destiniationCountry,
                                               setDestiniationCountry,
                                               travellerAmount,
                                               setTravellerAmount,
                                               dateOfDeparture,
                                               setDateOfDeparture,
                                               dateOfReturning,
                                               setDateOfReturning,
                                               personalBudget,
                                               setPersonalBudget
                                           }: TripGeneralInfoProps) {



    return (
        <div className={"add-trip-general-info"}>

            Trip Title: <input className="text-field" type="title"
                               placeholder="Add a title for your Trip" value={title}
                               onChange={event => setTitle(event.target.value)}/>

            Country of Destination: <input className="text-field" type="destinationCountry"
                                           placeholder="Add your Country of Destination"
                                           value={destiniationCountry}
                                           onChange={event => setDestiniationCountry(event.target.value)}/>

            Travel Distance: <input className="number-field" type="distance"
                                    placeholder="Add your Travel Distance (Round Trip)" min="1"
                                    step="10" value={distance}
                                    onChange={event => setDistance(Number(event.target.value))}/>

            Number of traveller: <input className="number-field" type="travellerAmount"
                                        placeholder="Number of Travellers" min="1" step="1"
                                        value={travellerAmount}
                                        onChange={event => setTravellerAmount(Number(event.target.value))}/>

            Date of Departure: <input className="text-field" type="dateOfDeparture"
                                      placeholder="Add your Date of Departure" value={dateOfDeparture}
                                      onChange={event => setDateOfDeparture(event.target.value)}/>

            Date of Returning: <input className="text-field" type="dateOfReturning"
                                      placeholder="Add your Date of Returning" value={dateOfReturning}
                                      onChange={event => setDateOfReturning(event.target.value)}/>

            Personal CO2 Budget: <input className="number-field" type="personalBudget"
                                        placeholder="Add your personal CO2-Budget for this Trip" min="1"
                                        step="10" value={personalBudget}
                                        onChange={event => setPersonalBudget(Number(event.target.value))}/>
        </div>)
}