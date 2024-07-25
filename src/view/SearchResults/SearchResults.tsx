import { Box, CircularProgress, Flex, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import { Settings } from "../../Settings";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import ResultCard from "../../component/Card/ResultCard";
import { SearchContext } from "../../context/SearchContext";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const {searchResults, loading, fetchContent} = useSearch
  const [loaded, setLoaded] = useState(false)

  

  const isMobile = useBreakpointValue({ base: true, md: false });
  
  const loadMore = ()=>{
    //fetchContent()
    console.log('called')
  }

  useEffect(()=>{
    if(searchResults.hasOwnProperty('contentCards')){
      setLoaded(true)
    }else{
      setLoaded(false)
    }
  },[searchResults])

  
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
        // <InfiniteScroll
        // dataLength={searchResults?.contentCards?.edges.length}
        // next={loadMore}
        // hasMore={true}
        // loader={<CircularProgress isIndeterminate color='orange.300' />}
        // >
          <SimpleGrid spacing={'24px'} minChildWidth={'244px'} columns={{ base: 2, md: 5 }}>
            {searchResults?.contentCards?.edges.map((edge, index)=>{
              return <ResultCard key={edge.id} data={edge}/>
            })}
            {(!searchResults?.contentCards?.edges.length) &&
              <Text sx={searchViewStyles.noResult}>No records to show</Text>
            }
            
          </SimpleGrid>
        // </InfiniteScroll>
      }
    </Box>
  )
}

export default SearchResults;