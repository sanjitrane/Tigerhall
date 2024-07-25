import React,{ createContext, useState } from "react";
import { brandTheme } from "../theme/theme";

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeMode = "dark" | "light"

type ThemeContextType = {
  brandTheme: typeof brandTheme
  mode: ThemeMode
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({children}:ThemeContextProviderProps)=>{
  const [mode, setMode ] = useState<ThemeMode>("dark")
  return <ThemeContext.Provider value={{brandTheme, mode, setMode}}>{children}</ThemeContext.Provider>
}

