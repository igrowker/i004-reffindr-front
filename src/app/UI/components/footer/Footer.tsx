import { Box} from "@chakra-ui/react"
import { Networks } from "./Networks";
import { Support } from "./Support";
import { ReceivedNews } from "./ReceivedNews";


export const Footer = () => {


  return (
    <Box
    display="flex"
    flexDirection={{base:"column-reverse", md:"row"}}
    alignItems={{base:"center, md:start"}}
    justifyContent="space-around"
    color="white"
    bg='#3182CE'
    height="341px"
    padding={{base:'1.5rem', md:"2.5rem"}}
      >
      <Networks/>
      <Box color={'white'} display={'flex'} padding={{base:'3', md:"0"}} marginBottom={'2'}>
        <Support/>
        <ReceivedNews/>
      </Box>
    </Box>
  )
}

export default Footer
