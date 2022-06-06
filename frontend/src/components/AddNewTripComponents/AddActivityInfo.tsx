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
        <div className={"add-trip-activity"}>
            <label className="label-input-field"> Rounds of Golf: <input className="number-field"
                                                                         type="number"
                                                                         placeholder="Add Rounds of Golf" min="0" step="1"
                                                                         value={amountOfGolfRounds}
                                                                         onChange={event => setAmountOfGolfRounds(Number(event.target.value))}/>
            </label>
            <label className="label-input-field"> Skiing Days: <input className="number-field"
                                                                      type="number"
                                                                      placeholder="Add Skiing days" min="0" step="1"
                                                                      value={amountOfSkiingDays}
                                                                      onChange={event => setAmountOfSkiingDays(Number(event.target.value))}/>
            </label>
            <label className="label-input-field"> Beauty Days:<input className="number-field"
                                                                     type="number"
                                                                     placeholder="Add Spa and Wellness days" min="0" step="1"
                                                                     value={amountOfBeautyDays}
                                                                     onChange={event => setAmountOfBeautyDays(Number(event.target.value))}/>
            </label>
            <label className="label-input-field"> Custom Activity Item: <input className="text-field"
                                                                               type="customActivityItem"
                                                                               placeholder="Add a Custom Activity Item"
                                                                               value={customActivityItem}
                                                                               onChange={event => setCustomActivityItem(event.target.value)}/>
            </label>
            <label className="label-input-field"> Amount of Custom Activity Item: <input className="number-field"
                                                                                         type="number"
                                                                                         placeholder="Add Amount of bought Custom Activity Items" min="0" step="1"
                                                                                         value={amountOfCustomActivityItem}
                                                                                         onChange={event => setAmountOfCustomActivityItem(Number(event.target.value))}/>
            </label>
            <label className="label-input-field"> Emissions of Custom Activity Item: <input className="number-field"
                                                                                            type="number"
                                                                                            placeholder="Add Emissions of your Custom Activity Item" min="0" step="0.1"
                                                                                            value={customActivityItemEmission}
                                                                                            onChange={event => setCustomActivityItemEmission(Number(event.target.value))}/>
            </label>
        </div>
    )
}