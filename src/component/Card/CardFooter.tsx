import { Flex, Image } from "@chakra-ui/react"

const CardFooter = ()=>{
  const footerStyle = {
    base:{
      justifyContent:'flex-end',
      p:'0px 8px 12px 8px',
    }
  }
  return <Flex
  sx={footerStyle.base}
  gap={'12px'}
  >
    <Image src='/share.svg' alt='Share icon'/>
    <Image src='/bookmark.svg' alt='Bookmark icon'/>
  </Flex>
}

export default CardFooter;