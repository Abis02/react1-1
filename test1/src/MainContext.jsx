import { useContext } from "react"
import ThemeContext from "./ThemeContext"

export default function MainContext() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div
           style={{
            width: "100vw",
            height: "100vh",
            padding: "1.5rem",
            backgroundColor: theme == "light" ? "white" : "black",
            color: theme == "light" ? "black" : "white",
           }}
           >
            <p>안녀아세요. 테마 변경이 가능합니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    )
}