import { createContext, useState } from "react";
import { ContextChildrenType, DataProps } from "../Types";

type SearchContextType = {
  searchData: DataProps | {}
  setData: React.Dispatch<React.SetStateAction<DataProps | {}>>
}

export const SearchContext = createContext({} as SearchContextType);

export const SearchContextProvider = ({children}:ContextChildrenType)=>{
  const [searchData, setData] = useState<DataProps | {}>({})
  return (
    <SearchContext.Provider value={{searchData, setData}}>{children}</SearchContext.Provider>
  )
}