import {  Card, CardBody, CardFooter,  Divider,  HStack,  Image, Text } from "@chakra-ui/react"

const ResultCard = ()=>{
  return <Card bg="white" maxW='244px'>

  <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='img'
      borderRadius={`8px 8px 0 0`}
      height={`120px`}
    />
  
  <Divider borderColor="gray.200" />
  <CardBody color="gray.500">
    <Text>Communication as a Leader</Text>
  </CardBody>


  <CardFooter>
    <HStack>
      
    </HStack>
  </CardFooter>

</Card>
}

export default ResultCard;