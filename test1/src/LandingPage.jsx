import React from "react";
import ToolBar from "./ToolBar";

export default function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }

    const onClickLogout = () => {
        setIsLogout(false)
    }

    return (
        <>
            <ToolBar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
        />
        <div>소플과 함께하는 리액트 공부!</div>
        </>
    )
}