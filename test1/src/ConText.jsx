
const ThemeContext = React.createContext('light')

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <UserContext.Priver value="??">
            <ToolBar />
            </UserContext.Priver>
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}

function ThemeButton() {
    return (
        <ThemeContext.Consumer>
            {value => <Button theme={value} />}
        </ThemeContext.Consumer>
    )
}

useContext(MyContext)