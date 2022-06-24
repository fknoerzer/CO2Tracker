import {ChangeEvent} from "react";
import {Activity} from "../../model/Trip";

type EditActivityInfoProps = {
    activities: Activity[]
    setActivities: (value: Activity[]) => void
}

export default function EditActivityInfo({activities, setActivities}: EditActivityInfoProps) {

    const handleShoppingFormChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        let data: Activity[] = [...activities];

        // @ts-ignore
        data[index][event.target.name] = (event.target.value);
        console.log(data);
        setActivities(data);

    }
    return (
        <div className={"edit-trip-input-overview"}>
            {activities.map((activityInput, index) => {
                return (
                    <div  key={"shopping" + index} className={"edit-trip-input-fields"}>
                            <h3> Did you play Golf during your Trip? </h3>
                            <input className="number-field"
                                   type="number"
                                   name={"amountOfGolfRounds"}
                                   placeholder="Add Amount of bought Clothes"
                                   min="0" step="1"
                                   value={activityInput.amountOfGolfRounds}
                                   onChange={event => handleShoppingFormChange(event, index)}/> Round(s) of Golf
                            <h3> Did you go skiing during you trip? </h3>
                            <input className="number-field"
                                   type="number"
                                   name={"amountOfSkiingDays"}
                                   placeholder="Add Amount of bought Electronic Devices"
                                   min="0" step="1"
                                   value={activityInput.amountOfSkiingDays}
                                   onChange={event => handleShoppingFormChange(event, index)}/> Skiing day(s)
                       <h3>Did you enjoy a spa and wellness day during your trip?</h3>
                       <input className="number-field"
                            type="number"
                            name={"amountOfBeautyDays"}
                            placeholder="Add Amount of bought small Souvenirs"
                            min="0" step="0.5"
                            value={activityInput.amountOfBeautyDays}
                            onChange={event => handleShoppingFormChange(event, index)}/> Spa and wellness day(s)
                            <h3>Here you can add a custom activity item</h3>
                            <input className="text-field"
                                   type="text"
                                   name={"customActivityItem"}
                                   placeholder="Add Custom Item"
                                   value={activityInput.customActivityItem}
                                   onChange={event => handleShoppingFormChange(event, index)}/>
                            <h3>Here you can add the amount of your custom activity item</h3>
                        <input className="number-field"
                                   type="number"
                                   name={"amountOfCustomActivityItem"}
                                   placeholder="Add Amount of bought Custom Shopping Items"
                                   min="0" step="1"
                                   value={activityInput.amountOfCustomActivityItem}
                                   onChange={event => handleShoppingFormChange(event, index)}/> Amount
                            of custom item(s)
                        <h3>Here you can add the emissions of your custom activity item</h3>
                        <input className="number-field"
                                   type="number"
                                   name={"customActivityItemEmission"}
                                   placeholder="Add Emissions of your Custom Shopping Item"
                                   min="0" step="0.1"
                                   value={activityInput.customActivityItemEmission}
                                   onChange={event => handleShoppingFormChange(event, index)}/> Emissions per item

                    </div>)
            })}
        </div>
    )
}