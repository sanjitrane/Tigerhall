import { Box, Flex, Text } from "@chakra-ui/react";
import { Settings } from "../../Settings";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ResultCard from "../../component/Card/ResultCard";

const SearchResults = () =>{
  const {brandTheme, mode} = useContext(ThemeContext)
  const searchViewStyles = {
    base:{
      position:'absolute',
      top: `${Settings.header.height}`,
      p: `60px 62px`,
      height:`100%`
    },
    text:{
      fontFamily:'PPFormula-Bold',
      fontSize:'24px',
      fontWeight:700,
      lineHeight:'28.8px',
      color: `${brandTheme[mode].color}`,
      mb:'40px'
    }
    

  }
  return (
    <Box
    sx={searchViewStyles.base}
    >
      <Text
      sx={searchViewStyles.text}
      >Tigerhall Library</Text>
      <Flex gap={24}>
        <ResultCard/>
      </Flex>
    </Box>
  )
}

export default SearchResults;