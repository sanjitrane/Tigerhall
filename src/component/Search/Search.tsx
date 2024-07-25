import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import { useContext, useDeferredValue, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Settings } from "../../Settings";
import { SearchContext } from "../../context/SearchContext";

const Search = () =>{

const {brandTheme, mode} = useContext(ThemeContext)

const useSearch = useContext(SearchContext)

const searchStyles = {
  icon:{
    color: `${brandTheme[mode].search.searchIcon}`
  },
  inputBox:{
    p:`8px 12px 8px 40px`,
    backgroundColor: `${brandTheme[mode].search.searchBg}`,
    borderColor: `${brandTheme[mode].search.searchBorder}`,
    color: `${brandTheme[mode].search.textColor}`
  }
}
  const { setSearchQuery } = useSearch
  const [searchValue, setValue] = useState<string>('')
  const deferredQuery = useDeferredValue(searchValue)

  const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }

  useEffect(()=>{
    setTimeout(()=>{
      setSearchQuery(deferredQuery)
    }, 300)
    
  },[deferredQuery])

  useEffect(()=>{
    setSearchQuery(deferredQuery)
  },[])

  return <InputGroup
    maxWidth={{base: `${Settings.search.inputGroup.base.maxWidth}`, md: `${Settings.search.inputGroup.md.maxWidth}`}}
  >
    <InputLeftElement pointerEvents='none'>
      <SearchIcon 
        sx={searchStyles.icon} 
      />
    </InputLeftElement>
    <Input 
      variant='outline' 
      placeholder={Settings.search.input.placeHolderText}
      _placeholder={{color: `${brandTheme[mode].search.placeholder}`}}
      sx={searchStyles.inputBox}
      onChange={onChange}
      value={searchValue}
    />
  </InputGroup>
}

export default Search;