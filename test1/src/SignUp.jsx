import { useState } from "react"

export default function SignUp() {
    const [name, setName] = useState()
    const [gender, setGender] = useState("")
    const [text,setText] = useState("")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(`이름: ${name}, 성별: ${gender}`)
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" placeholder="이름을 입력하세요" value={name} onChange={handleChangeName} />
                <br></br>
            </label>
            <label>
            성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
                <br></br>
            </label>
            <label>
                텍스트 입력:<br></br>
                <textarea value={text} onChange={handleChangeText} placeholder="본문을 입력하세요"></textarea>
            </label>
            <br></br>
            <button type="submit">제출</button>
        </form>
    )
}