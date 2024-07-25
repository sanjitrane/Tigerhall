import { Progress } from "@chakra-ui/react"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ProgressBar = ()=>{
  const {brandTheme, mode} = useContext(ThemeContext)
  return <Progress
  value={30}
  size='xs'
  colorScheme="orange"
  sx={{
    track:{
      bg:`${brandTheme[mode].card.progressBar.bg}`
    },
    filledTrack:{
      backgroundColor:`${brandTheme[mode].card.progressBar.completed}`
    }
  }
    
  }
  ></Progress>
}
export default ProgressBar;