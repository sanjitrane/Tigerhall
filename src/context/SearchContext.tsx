import { createContext, useEffect, useState } from "react"
import { ContextChildrenType, DataProps } from "../Types"
import { GET_CONTENT } from "../queries/Content";
import { useQuery } from "@apollo/client";

type SearchContextType = {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>> 
  searchResults: any[]
  loading:boolean
  error:null
  handleSearch:(query:string)=>void,
}

export const SearchContext = createContext({} as SearchContextType);

export const SearchContextProvider = ({children}:ContextChildrenType)=>{
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
    const { loading: searchLoading, error: searchError, data} = useQuery(GET_CONTENT,{
      variables:{keywords: searchQuery},
      skip: !searchQuery
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
    <SearchContext.Provider value={{searchQuery, setSearchQuery, searchResults, loading, error, handleSearch}}>{children}</SearchContext.Provider>
  )

} 
