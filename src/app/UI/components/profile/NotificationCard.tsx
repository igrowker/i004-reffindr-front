import { Alert } from "@/components/ui/alert";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";

export const NotificationCard = () => {
  return (
    
    <Alert status="info" bg="white" border="1px solid #E2E8F0" borderRadius="md" p="4">
      <Flex alignItems="center">
        {/*mi icono de alerte */}
        <IoIosNotificationsOutline size={24} style={{ marginRight: "8px", color: "black" }} />
        <Box flex="1">
          
          <Flex alignItems="center">
            <Text fontWeight="bold" color="black" fontSize="lg">
              ¡Nuevo candidato postulado!
            </Text>
            <Spacer />
            <Text color="gray.500" fontSize="sm">
              (hace 3 días)
            </Text>
          </Flex>
          
          <Text color="black" fontSize="sm" mt="2">
            Lautaro Fazzito se ha postulado a tu anuncio. Has sobrepasado las 10 candidaturas para encontrar
            al próximo inquilino de tu vivienda. ¡Vas genial! Te deseamos lo mejor en tu proceso de selección.
          </Text>
         

          <Flex justifyContent="flex-end" mt="2">
            <Text color="gray.500" fontWeight="medium" fontSize="sm" cursor="pointer">
              ver más &gt;
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Alert>
  );
};
