import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode: "light",
    darkTheme: ()=> {},
    lightTheme: ()=> {}
})

//wrap all components inside ThemeProvider
export const ThemeProvider = ThemeContext.Provider


export default function useTheme() {

    return useContext(ThemeContext)
}