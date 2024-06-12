import { useState } from "react";

export default function DarkOrLight() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme('dark')
        } else if (theme == 'dark') {
            setTheme('light')
        }
    }, [theme])

}