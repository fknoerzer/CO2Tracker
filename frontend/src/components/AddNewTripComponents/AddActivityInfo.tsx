
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
            Rounds of Golf: <input className="number-field" type="AmountOfGolfRounds" placeholder="Add Rounds of Golf"
                                   value={amountOfGolfRounds}
                                   onChange={event => setAmountOfGolfRounds(Number(event.target.value))}/>

            Skiing Days: <input className="number-field" type="AmountOfSkiingDays" placeholder="Add Skiing days"
                                value={amountOfSkiingDays}
                                onChange={event => setAmountOfSkiingDays(Number(event.target.value))}/>

            Beauty Days:<input className="number-field" type="AmountOfBeautyDays"
                               placeholder="Add Spa and Wellness days"
                               value={amountOfBeautyDays}
                               onChange={event => setAmountOfBeautyDays(Number(event.target.value))}/>
            Custom Activity Item: <input className="text-field" type="customActivityItem"
                                         placeholder="Add a Custom Activity Item" value={customActivityItem}
                                         onChange={event => setCustomActivityItem(event.target.value)}/>

            Amount of Custom Activity Item: <input className="number-field" type="AmountOfCustomActivityItem"
                                                   placeholder="Add Amount of bought Custom Activity Items"
                                                   value={amountOfCustomActivityItem}
                                                   onChange={event => setAmountOfCustomActivityItem(Number(event.target.value))}/>

            Emissions of Custom Activity Item: <input className="number-field"
                                                      type="AmountOfCustomActivityItemEmissions"
                                                      placeholder="Add Emissions of your Custom Activity Item"
                                                      value={customActivityItemEmission}
                                                      onChange={event => setCustomActivityItemEmission(Number(event.target.value))}/>
        </div>
    )
}