import { createContext } from 'react'

export const themes = {
    primary: {
        background: '#000',
        color: '#fff',
    },
    secondary: {
        background: '#fff',
        color: '#000',
    },
}

export const ThemeContext = createContext(themes.secondary)

