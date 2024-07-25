import {  Card } from "@chakra-ui/react"
import CardHeader from "./CardHeader";
import ProgressBar from "../Progress/ProgressBar";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const ResultCard = ()=>{
  return <Card bg="white" maxW='244px'>

  <CardHeader/>
  
  <ProgressBar/>
  <CardBody/>

  <CardFooter/>
</Card>
}

export default ResultCard;