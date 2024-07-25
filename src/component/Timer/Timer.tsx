import { Flex, Image, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { convertSecToMin } from "../../utils"

type Props={
  time: number
}

const Timer = ({time}:Props)=>{
  const {brandTheme, mode} = useContext(ThemeContext)
  const timeStyles = {
    backgroundColor: `${brandTheme[mode].card.time.bg}`,
    borderRadius: '100px',
    p:'4px 8px',
    text:{
      fontFamily:'PPFormula-Bold',
      fontSize:'12px',
      color: `${brandTheme[mode].card.time.textColor}`
    }
  }
  return(<Flex
    gap={'4px'}
    sx={timeStyles}
  >
    <Image src='/time.svg' alt='content time'/>
    <Text
      sx={timeStyles.text}
    >{`${convertSecToMin(time)}m`}</Text>
  </Flex>)
}

export default Timer;