import { useState } from "react"

export default function Midterm() {
    const [answer, setAnswer] = userState()

    const apple = () => {
        setAnswer('사과')

    }

    const orange = () => {
        setAnswer('오렌지')

    }

    const banana = () => {
        setAnswer('바나나')
    
    }

    return (
        <>
            <h1>당신은 어떤 과일을 좋아하나요? {answer}</h1>
            <button onClick={apple}>사과</button>&nbsp;&nbsp;&nbsp;
            <button onClick={orange}>오렌지</button>&nbsp;&nbsp;&nbsp;
            <button onClick={banana}>바나나</button>
        </>
    )
}