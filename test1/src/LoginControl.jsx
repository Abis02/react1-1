import { useState } from "react"
import Greeting from "./Greeting"

export default function LoginControl(props) {
    const [isLoggedIn, setIsLogedIn] = useState(false)
    
    const handleLoginClick = () => {
        setIsLogedIn(true)
    }
    const handleLogoutClick = () => {
        setIsLogedIn(false)
    }

    let button
    if (isLoggedIn) {
        button = <LogoutButton onClick = {handleLogoutClick} />
    } else {
        button = <LoginButton onClick = {handleLoginClick} />
    } 
    return (
        <div>
            <Greeting isLoggedIn = {isLoggedIn} />
            {button}
        </div> 
    )
}


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>로그인</button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>로그아웃</button>
    )
}