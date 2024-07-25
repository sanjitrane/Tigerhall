import { Box, Flex, Spacer, Text } from "@chakra-ui/react"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const CardBody = ()=>{
  const {brandTheme, mode} = useContext(ThemeContext)
  const bodyStyle = {
    base:{
      flexDirection:'column',
      alignItems:'start',
      p:'8px 8px 12px 8px',
      backgroundColor: `${brandTheme[mode].card.bg}`
    },
    box:{
      width:'100%'
    },
    headerText:{
      color: `${brandTheme[mode].card.headerText}`,
      fontFamily:'PPFormula-Medium',
      fontSize:'12px',
      textTransform:'uppercase',
      width:'100%',
      lineHeight:'14.4px',
      textAlign:'left'
    },
    titleText:{
      color: `${brandTheme[mode].card.titleText}`,
      fontFamily:'PPFormula-Bold',
      fontSize:'16px',
      overflow:"hidden",
      textAlign:'left',
      width:'100%',
      lineHeight:'19.2px'
    },
    authorText:{
      color: `${brandTheme[mode].card.authorText}`,
      fontFamily:'PPFormula-Medium',
      fontSize:'12px',
      textAlign:'left',
      lineHeight:'14.4px'
    },
    authorDesg:{
      color: `${brandTheme[mode].card.autorDesg}`,
      fontFamily:'PPFormula-Bold',
      fontSize:'12px',
      textAlign:'left',
      width:'100%',
      lineHeight:'14.4px'
    },
  }
  return(
    <Flex 
    gap={'8px'}
    sx={bodyStyle.base}
    >
      <Box sx={bodyStyle.box}>
      <Text
      sx={bodyStyle.headerText}
      noOfLines={1}
      >Line 12433242343242dfdsgdsgdsgdfsgdgdsgdsgdsgdsg</Text>
      <Text
      sx={bodyStyle.titleText}
      noOfLines={[3,2,1]}
      >Peak Performance: Going To From Good to Great with Simon Taudel. Peak Performance: Going From Good to Great with Simon Taudel.
      </Text>
      </Box>
      <Box sx={bodyStyle.box}>
      <Text
      sx={bodyStyle.authorText}
      noOfLines={1}
      >
      Jane Doe
      </Text>
      <Text
      sx={bodyStyle.authorDesg}
      noOfLines={1}
      >
      Subway APAC
      </Text>
      </Box>
    </Flex>
  )
}

export default CardBody;