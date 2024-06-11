const scaleName = {
    C: '섭씨',
    F: '화씨'
}

export default function TemperatureInput(props) {
    const handleChange = (e) => {
        props.onTemeperatureChange(e.target.value)

    }

    return (
        <fieldset>
        <legend>섭씨 온도를 확인하세요(단위: {scaleName[props.scale]})</legend>
        <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}