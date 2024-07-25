import { Box, Flex, Spacer, Text } from "@chakra-ui/react"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { EdgeType } from "../../Types";
import { listToString } from "../../utils";

type Props={
  info: EdgeType
}

const CardBody = ({info}:EdgeType)=>{
  const {brandTheme, mode} = useContext(ThemeContext)
  const {name, experts, categories} = info
  
  const bodyStyle = {
    base:{
      flexDirection:'column',
      alignItems:'start',
      p:'8px 8px 12px 8px',
      backgroundColor: `${brandTheme[mode].card.bg}`,
      height:'109px'
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
      >{listToString(categories,'name')}</Text>
      <Text
      sx={bodyStyle.titleText}
      noOfLines={[1,2,3]}
      >{name}
      </Text>
      </Box>
      <Box sx={bodyStyle.box}>
      <Text
      sx={bodyStyle.authorText}
      noOfLines={1}
      >
      {`${experts[0].firstName} ${experts[0].lastName}`}
      </Text>
      <Text
      sx={bodyStyle.authorDesg}
      noOfLines={1}
      >
      {`${experts[0].__typename}`}
      </Text>
      </Box>
    </Flex>
  )
}

export default CardBody;