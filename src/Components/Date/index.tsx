type DateType = "date"
interface DateProps {
    type?: DateType
    text?: string
    number?: number
}


export const Date = ({ number = 0, text = "", type = "date" }: DateProps) => {
    return (<>
        <div className={`Date ${type}`}>
            <div className={`text`}>
                {text}
            </div>
            <div className={`number`}>
                {number}
            </div>

        </div>

    </>)
}