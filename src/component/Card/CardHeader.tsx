import { Box, Image } from "@chakra-ui/react";
import Tag from "../Tag/Tag";
import Listen from "../Listen/Listen";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Timer from "../Timer/Timer";
import { ImageType } from "../../Types";

type Props={
  image: ImageType | null
  time: number
}

const CardHeader = ({image, time}: Props)=>{
  const {brandTheme, mode} = useContext(ThemeContext)

  const cardStyles = {
    base:{
      position:'relative',
    },
    image:{
      objectFit:'cover',
      borderRadius:`8px 8px 0 0`,
      height:'120px',
      width:'100%'
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
      src= {image?.uri}
      alt='img'
      sx={cardStyles.image}
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
      <Timer time={time}/>
    </Box>
    
    </Box>
  )
}

export default CardHeader;