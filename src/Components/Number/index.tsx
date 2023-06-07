type NumberType = "number1" | "number2"

interface NumberProps {
    type?: NumberType
    hour?: number
    minutes?: number
    seconds?: number

}


export const Number = ({ type = "number1", seconds = 0, minutes = 0,  hour = 0 }: NumberProps) => {
    return (<>
        <div className={`Number ${type}`}>
            <div className={`hour`}>
                {
                    hour > 12 ? hour - 12 : hour
                }:
            </div>

            <div className={`minutes `}>
                {minutes}:
            </div>
            <div className={`seconds `}>
                {seconds}
            </div> 
            <div className={`hourtype`}>
                {
                    hour > 12 ?"PM":"AM"
                }
            </div>
        </div>


    </>)
}