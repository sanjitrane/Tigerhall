import React,{ createContext, useState } from "react";
import { brandTheme } from "../theme/theme";
import { ContextChildrenType } from "../Types";

type ThemeMode = "dark" | "light"

type ThemeContextType = {
  brandTheme: typeof brandTheme
  mode: ThemeMode
  setMode: React.Dispatch<React.SetStateAction<ThemeMode>>
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({children}:ContextChildrenType)=>{
  const [mode, setMode ] = useState<ThemeMode>("dark")
  return <ThemeContext.Provider value={{brandTheme, mode, setMode}}>{children}</ThemeContext.Provider>
}

