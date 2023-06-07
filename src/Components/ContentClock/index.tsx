import { Clock } from "../Clock"
import { Number } from "../Number"
import { Date as DateComponent } from "../Date"
import { useEffect, useState } from "react"
import { ButtonTema} from "../ButtonTema"

type ContentClockType = "ContentClock1" | "ContentClock2"
interface ContentClockProps {
    type?: ContentClockType


}
export const ContentClock = ({ type = "ContentClock1" }: ContentClockProps) => {
    const [date, setDate] = useState<Date>(new Date())

    const updateDate = () => {
        setDate(new Date())
    }
    const looUpdateDate = async () => {
        updateDate()
        await new Promise((r) => setTimeout(r, 1000));
        looUpdateDate()
    }
    useEffect(() => {
        looUpdateDate()
    }, [])
    

    return (<>
        <div className={`ContentClock ${type}`}>
            <Clock
                hour={date.getHours()}
                minutes={date.getMinutes()}
                seconds={date.getSeconds()}
            />
            <Number
                hour={date.getHours()}
                minutes={date.getMinutes()}
                seconds={date.getSeconds()}
            />
            <DateComponent
                text={
                    date.toLocaleDateString('en-US', {
                        weekday:"long",
                        month:"short"
                    })
                }
                number={date.getMonth() + 1}
                
            />
            <ButtonTema/>
        </div>
    </>)
}