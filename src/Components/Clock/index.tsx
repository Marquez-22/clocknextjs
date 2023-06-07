import { CSSProperties } from "react"

type ClockType = "Clock1" | "Clock2"
interface ClockProps {
    type?: ClockType
    hour?: number
    minutes?: number
    seconds?: number

}
export const Clock = ({ type = "Clock1", seconds = 0, minutes = 0, hour = 0 }: ClockProps) => {
    return (<>
        <div className={`Clock ${type}`}

            style={{
                ["--hora"]:hour,
                ["--minutes"]:minutes,
                ["--seconds"]:seconds,
            } as CSSProperties }
        >
            <div className={`hour`}>
                
            </div>

            <div className={`minutes `}>
                
            </div>
            <div className={`seconds `}>
               
            </div>
            <div className="circle">
                
            </div>
           
        </div>


    </>)
}