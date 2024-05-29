import { userState } from "react"

export default function Toggle(props) {
    const [isToggleOn, setisToggleOn] = userState(true)

    const handleClick = () => {
        setisToggleOn((isToggleOn) => !isToggleOn)
    }
    return {
        
    }
}