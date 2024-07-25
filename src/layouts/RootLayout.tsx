import { useContext } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../component/Header/Header";
import SearchResults from "../view/SearchResults/SearchResults";

/**
 * 
 * header with search bar
 * content area with thumbnails
 */

const RootLayout =()=>{
  const {brandTheme, mode} = useContext(ThemeContext)
  
  return <>
  <Grid bg={brandTheme[mode].header.bg}>
    <GridItem as="header">
      <Header/>
    </GridItem>
    <GridItem as="main">
      <SearchResults/>
    </GridItem>
  </Grid>
  
  </>
}

export default RootLayout;
