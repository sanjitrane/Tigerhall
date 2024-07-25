import React,{ createContext, useState } from "react";
import { brandTheme } from "../theme/theme";
import { ContextChildrenType, ThemeMode, ThemeContextType } from "../Types";

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({children}:ContextChildrenType)=>{
  const [mode, setMode ] = useState<ThemeMode>("dark")
  return <ThemeContext.Provider value={{brandTheme, mode, setMode}}>{children}</ThemeContext.Provider>
}

