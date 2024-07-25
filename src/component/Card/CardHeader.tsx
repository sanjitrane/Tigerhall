import { Box, Image } from "@chakra-ui/react";
import Tag from "../Tag/Tag";
import Listen from "../Listen/Listen";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Timer from "../Timer/Timer";


const CardHeader = ()=>{
  const {brandTheme, mode} = useContext(ThemeContext)

  const cardStyles = {
    base:{
      position:'relative',
    },
    tag:{
      position:'absolute',
      top:0,
      left:0,
    },
    listenIcon:{
      position:'absolute',
      bottom: '8px',
      left:'8px',
      backgroundColor: `${brandTheme[mode].card.podcast.bg}`,
      borderRadius:'50px',
      p:'5px'
    },
    timer:{
      position:'absolute',
      right:'4px',
      bottom:'8px'
    }
  }
  return(
    <Box 
      sx={cardStyles.base}
    >
      <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='img'
      borderRadius={`8px 8px 0 0`}
      height='auto'
      maxH='120px'
      width='100%'
    />
    <Box
      sx={cardStyles.tag}
    >
      <Tag/>
    </Box>
    <Box
      sx={cardStyles.listenIcon}
    >
      <Listen/>
    </Box>
    <Box
      sx={cardStyles.timer}
    >
      <Timer/>
    </Box>
    
    </Box>
  )
}

export default CardHeader;