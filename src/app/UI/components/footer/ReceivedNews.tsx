import { InputGroup } from "@/components/ui/input-group";
import { Box, Heading, Input } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";

export const ReceivedNews = () => {
  return (
    <Box
      w={{ base: "10/12", lg: "1/2" }}
      display="flex"
      flexDirection="Column"
      gapY="5"
    >
      <Heading as='h3' fontWeight='semibold' fontSize='xl' w={{ base: "full", lg: "8/12" }}>
        Recibí las novedades de propiedades
      </Heading>
      <Box
        position="relative"
        width="full"
      >
        <InputGroup>
          <Input
            type="text"
            placeholder="Escribí tu email"
            borderRadius="lg"
            height="40px"
            fontSize="sm"
            bg="whiteAlpha.500"
            opacity="0.5"
            px="3"
            pr="10"
            _placeholder={{ color: "white" }}
            _focus={{ outline: "none" }}
          />

        </InputGroup>
        <Box
          position="absolute"
          right={{base:"3", md:"24", xl: "9"}}
          top="50%"
          transform="translateY(-50%)"
          color="black"
        >
          <FiSend size={17} />
        </Box>

      </Box>
    </Box>
  )
}
