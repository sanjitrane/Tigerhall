import { Box, SimpleGrid, Skeleton, SkeletonCircle, SkeletonText, Text, background, useBreakpointValue } from "@chakra-ui/react";
import { Settings } from "../../Settings";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ResultCard from "../../component/Card/ResultCard";
import { SearchContext } from "../../context/SearchContext";


const SearchResults = () =>{
  const {brandTheme, mode} = useContext(ThemeContext)
  const useSearch = useContext(SearchContext)

  const searchViewStyles = {
    base:{
      position:'absolute',
      top: `${Settings.header.height}`,
      p: `60px 62px`,
      width:'100%'
    },
    skeleton:{
      backgroundColor: `${brandTheme[mode].card.bg}`,
      borderRadius:'6px',
      width:'244px',
    },
    text:{
      fontFamily:'PPFormula-Bold',
      fontSize:'24px',
      fontWeight:700,
      lineHeight:'28.8px',
      color: `${brandTheme[mode].color}`,
      mb:'40px',
      textAlign:'left'
    },
    noResult:{
      fontFamily:'PPFormula-Medium',
      fontSize:'16px',
      color: `${brandTheme[mode].card.progressBar.completed}`,
      mb:'40px',
      textAlign:'left'
    },
  }
  const {searchResults, searchLoading} = useSearch
  
  const isMobile = useBreakpointValue({ base: true, md: false });
  
  
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
      {searchLoading && 
        <Box padding='6' boxShadow='lg' sx={searchViewStyles.skeleton}>
        <Skeleton height={'120px'} />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      }
      {!searchLoading && 
        <SimpleGrid spacing={'24px'} minChildWidth={'244px'} columns={{ base: 5, md: 5 }}>
          {searchResults?.contentCards?.edges.map((edge, index)=>{
            return <ResultCard key={edge.id} data={edge}/>
          })}
          {(!searchResults?.contentCards?.edges.length) &&
            <Text sx={searchViewStyles.noResult}>No records to show</Text>
          }
          
        </SimpleGrid>
        
      }
    </Box>
  )
}

export default SearchResults;