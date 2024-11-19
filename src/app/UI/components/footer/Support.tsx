import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Support = () => {
  return (
    <Box w={{ base: "full", md: "50%" }} display="flex" flexDirection="column" gapY={2}>
      <Heading as="h3" fontSize="xl" fontWeight="semibold" mb="5">
        Soporte
      </Heading>
      <Link to="#">
        Centro de atención
      </Link>
      <Link to="#" color="white">
        Términos de servicios
      </Link>
      <Link to="#" color="white">
        Legal
      </Link>
      <Link to="#" color="white">
        Política de privacidad
      </Link>
    </Box>
  );
};
