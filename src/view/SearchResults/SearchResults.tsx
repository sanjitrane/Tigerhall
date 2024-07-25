import { Box, Flex, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { Settings } from "../../Settings";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ResultCard from "../../component/Card/ResultCard";
import { SearchContext } from "../../context/SearchContext";

const SearchResults = () =>{
  const {brandTheme, mode} = useContext(ThemeContext)
  const {searchData} = useContext(SearchContext)
  const [loaded, setLoaded] = useState(false)
  
  const searchViewStyles = {
    base:{
      position:'absolute',
      top: `${Settings.header.height}`,
      p: `60px 62px`,
      width:'100%'
    },
    text:{
      fontFamily:'PPFormula-Bold',
      fontSize:'24px',
      fontWeight:700,
      lineHeight:'28.8px',
      color: `${brandTheme[mode].color}`,
      mb:'40px',
      textAlign:'left'
    }
    

  }

  const isMobile = useBreakpointValue({ base: true, md: false });
  console.log('Search data:', searchData)

  useEffect(()=>{
    if(searchData.hasOwnProperty('contentCards')){
      setLoaded(true)
    }else{
      setLoaded(false)
    }
  },[searchData])

  return (
    <Box
    sx={{
      ...searchViewStyles.base,
      display: isMobile ? 'flex' : 'block',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: isMobile ? 'center' : 'flex-start', 
      alignItems: 'center',
    }}
    >
      <Text
      sx={searchViewStyles.text}
      >Tigerhall Library</Text>
      {loaded && 
        <SimpleGrid spacing={'24px'} minChildWidth={'244px'} columns={{ base: 2, md: 5 }}>
          {searchData?.contentCards?.edges.map((edge)=>{
            return <ResultCard data={edge}/>
          })}
          
        </SimpleGrid>
      }
    </Box>
  )
}

export default SearchResults;