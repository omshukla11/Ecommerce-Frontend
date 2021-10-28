import React, { useState, useContext } from "react"

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
    const [darktheme, setDarktheme] = useState(true)

    function changeTheme() {
        setDarktheme(prevtheme => !prevtheme)
    }

    return (
        <ThemeContext.Provider value={darktheme} >
            <ThemeUpdateContext.Provider value={changeTheme} >
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}