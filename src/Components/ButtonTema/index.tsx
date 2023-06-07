import { ReactNode, useState } from "react"
import { Button } from "../Button"

type ButtonTemaType = "ButtonTema1"

interface ButtonTemaProps {
    type?: ButtonTemaType
}

export const ButtonTema = ({ }: ButtonTemaProps) => {
    const [themeActive, setThemeActive] = useState(false)
    const toogleTheme = () => {
        setThemeActive(!themeActive)
        document.body.classList.toggle("dark")
    }
    return (<>
        <Button
            onClick={toogleTheme}
        >
            Theme{" "}
            {
                themeActive ? "Ligth" : "Dark"
            }
        </Button>
    </>)
}