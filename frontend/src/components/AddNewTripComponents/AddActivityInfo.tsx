type ActivityInfoProps = {
    amountOfGolfRounds: number
    setAmountOfGolfRounds: (value: number) => void
    amountOfSkiingDays: number
    setAmountOfSkiingDays: (value: number) => void
    amountOfBeautyDays: number
    setAmountOfBeautyDays: (value: number) => void
    customActivityItem: string
    setCustomActivityItem: (value: string) => void
    customActivityItemEmission: number
    setCustomActivityItemEmission: (value: number) => void
    amountOfCustomActivityItem: number
    setAmountOfCustomActivityItem: (value: number) => void

}

export default function AddActivityInfo({
                                            amountOfGolfRounds,
                                            setAmountOfGolfRounds,
                                            amountOfSkiingDays,
                                            setAmountOfSkiingDays,
                                            amountOfBeautyDays,
                                            setAmountOfBeautyDays,
                                            customActivityItem,
                                            setCustomActivityItem,
                                            customActivityItemEmission,
                                            setCustomActivityItemEmission,
                                            amountOfCustomActivityItem,
                                            setAmountOfCustomActivityItem
                                        }: ActivityInfoProps) {


    return (
        <div className={"add-new-trip-input-overview"}>
            <label className="label-input-field">
                <h3> Did you play Golf during your Trip?</h3>
                <input className="number-field"
                                                                         type="number"
                                                                         placeholder="Add Rounds of Golf" min="0" step="1"
                                                                         value={amountOfGolfRounds}
                                                                         onChange={event => setAmountOfGolfRounds(Number(event.target.value))}/> Round(s) of Golf
            </label>
            <label className="label-input-field">
                <h3> Did you go skiing during you trip? </h3>
                <input className="number-field"
                                                                      type="number"
                                                                      placeholder="Add Skiing days" min="0" step="1"
                                                                      value={amountOfSkiingDays}
                                                                      onChange={event => setAmountOfSkiingDays(Number(event.target.value))}/> Skiing day(s)
            </label>
            <label className="label-input-field">
                <h3> Did you enjoy a spa and wellness day during your trip?</h3>
                <input className="number-field"
                                                                     type="number"
                                                                     placeholder="Add Spa and Wellness days" min="0" step="1"
                                                                     value={amountOfBeautyDays}
                                                                     onChange={event => setAmountOfBeautyDays(Number(event.target.value))}/> Spa and wellness day(s)
            </label>
            <label className="label-input-field">
                <h3> Here you can add a custom activity trip </h3>
                <input className="text-field"
                                                                               type="text"
                                                                               placeholder="Add custom trip"
                                                                               value={customActivityItem}
                                                                               onChange={event => setCustomActivityItem(event.target.value)}/>
            </label>
            <label className="label-input-field">
                <h3> Here you can add the amount of your custom activity trip </h3>
                <input className="number-field"
                                                                                         type="number"
                                                                                         placeholder="Add Amount of bought Custom Activity Items" min="0" step="1"
                                                                                         value={amountOfCustomActivityItem}
                                                                                         onChange={event => setAmountOfCustomActivityItem(Number(event.target.value))}/> Amount of custom trip(s)
            </label>
            <label className="label-input-field">
                <h3> Here you can add the emissions of your custom activity trip </h3>
                <input className="number-field"
                                                                                            type="number"
                                                                                            placeholder="Add Emissions of your Custom Activity Item" min="0" step="0.1"
                                                                                            value={customActivityItemEmission}
                                                                                            onChange={event => setCustomActivityItemEmission(Number(event.target.value))}/> Emissions per trip
            </label>
        </div>
    )
}