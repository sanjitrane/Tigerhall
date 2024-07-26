import { createContext, useEffect, useState } from "react"
import { ContextChildrenType, SearchContextType } from "../Types"
import { GET_CONTENT } from "../queries/Content";
import { useQuery } from "@apollo/client";

export const SearchContext = createContext({} as SearchContextType);

export const SearchContextProvider = ({children}:ContextChildrenType)=>{
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  
    const { loading: searchLoading, error: searchError, data} = useQuery(GET_CONTENT,{
      variables:{keywords: searchQuery}
    });


  useEffect(() => {
    if (data?.contentCards) {
      setSearchResults(data);
    }
  }, [data]);

  const handleSearch = (query:string)=>{
    setSearchQuery(query)
  }

  return (
    <SearchContext.Provider value={{searchQuery, setSearchQuery, searchResults, searchLoading, searchError, handleSearch}}>{children}</SearchContext.Provider>
  )

} 
