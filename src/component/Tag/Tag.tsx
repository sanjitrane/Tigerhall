import { Flex, Image, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const Tag = ()=>{
  const {brandTheme, mode} = useContext(ThemeContext)
  const tagStyles = {
    backgroundColor: `${brandTheme[mode].card.tag.bg}`,
    borderRadius: '8px 0 5px 0',
    p:'8px',
    text:{
      fontFamily:'PPFormula-Bold',
      fontSize:'12px',
    }
  }
  return(<Flex
    gap={'4px'}
    sx={tagStyles}
  >
    <Image src='/status.svg' alt='content status'/>
    <Text
      sx={tagStyles.text}
    >30% Completed</Text>
  </Flex>)
}

export default Tag;