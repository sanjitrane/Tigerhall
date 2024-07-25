import { Box } from "@chakra-ui/react";
import { Settings } from "../../Settings";

const Profile = ()=>{
  
  return <Box width={{base: `${Settings.profile.base.width}`, md:`${Settings.profile.md.width}` }}></Box>
}

export default Profile;