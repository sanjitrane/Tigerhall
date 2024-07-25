import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import { Settings } from "../../Settings";

const Header = ()=>{
  const {brandTheme, mode} = useContext(ThemeContext)
  const headerStyles = {
    base:{
      paddingX: "24px",
      borderBottom: `1px solid ${brandTheme[mode].header.borderColor}`,
      height:`${Settings.header.height}`,
      backgroundColor: `${brandTheme[mode].header.bg}`,
      alignItems:"center",
      justifyContent: "space-between",
      position:"fixed",
      top:0,
      zIndex:Settings.header.zIndex,
      width:'100%'
    }
  }
  return (
    <Flex 
    sx={headerStyles.base}
    >
      <Logo/>
      <Search/>
      <Profile/>
    </Flex>
  )
}

export default Header;