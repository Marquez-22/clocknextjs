import { ReactNode } from "react"

type ButtonType = "Button1" 

interface ButtonProps {
    type?: ButtonType
    children?: ReactNode
    className?: string
    onClick?: () => void
}

export const Button = ({ type = "Button1", children, onClick, className = "" }: ButtonProps) => {
    return (<>
        <button className={`Button ${type} ${className}`} onClick={onClick}>
            {children}
            
            
        </button>
    </>)
}