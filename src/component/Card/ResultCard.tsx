import {  Card } from "@chakra-ui/react"
import CardHeader from "./CardHeader";
import ProgressBar from "../Progress/ProgressBar";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { EdgeType } from "../../Types";

type Props = {
  data: EdgeType
}

const ResultCard = ({data}:Props)=>{
  const {image, length} = data
  return <Card bg="white" maxW='244px'>

  <CardHeader image={image} time={length}/>
  
  <ProgressBar/>
  <CardBody info={data}/>

  <CardFooter/>
</Card>
}

export default ResultCard;