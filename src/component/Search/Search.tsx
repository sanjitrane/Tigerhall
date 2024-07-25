import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Settings } from "../../Settings";

const Search = () =>{
  const {brandTheme, mode} = useContext(ThemeContext)
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
    />
  </InputGroup>
}

export default Search;