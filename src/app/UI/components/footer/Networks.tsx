import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Box} from "@chakra-ui/react"

export const Networks = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
        color="white"
        display="flex"
        flexDirection={{ base: 'row', md: 'column' }}
        alignItems= {{ base: 'center', md: 'start'}}
        gapY={{md: '5'}}
        gapX={'5'}
        justifyContent={{ base: 'space-between', md: 'flex-start'}}
      >
        <p>Copyright © {currentYear}</p>
        <Box display={'flex'} flexWrap={'wrap'} gap={{base:'1', md:'5'}}>
        <Link to="https://www.instagram.com/" aria-label="Instagram">
          <Box
            bg="whiteAlpha.200"
            rounded="full"
            p="2"
            _hover={{ bg: "whiteAlpha.400" }}
          >
            <IoLogoInstagram size={32} />
          </Box>
        </Link>
        <Link to="https://x.com/" aria-label="Twitter">
          <Box
            bg="whiteAlpha.200"
            rounded="full"
            p="2"
            _hover={{ bg: "whiteAlpha.400" }}
          >
            <IoLogoTwitter size={32} />
          </Box>
        </Link>

        <Link to="https://www.youtube.com/" aria-label="YouTube">
          <Box
            bg="whiteAlpha.200"
            rounded="full"
            p="2"
            _hover={{ bg: "whiteAlpha.400" }}
          >
            <IoLogoYoutube size={32} />
          </Box>
        </Link>
        </Box>
      </Box>
  )
}
