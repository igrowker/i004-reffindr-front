import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Demo from "../ownerData/OwnerForm";

export const MenuAnnouncement = () => {
  const [activeTab, setActiveTab] = useState("Caracteristicas");

  const tabs = [
    "Detalles de propiedad",
    "Caracteristicas",
    "Datos del propietario",
    "Confirmación",
  ];

  return (
    <>
      {/* Aqui hago la navegacion eners las pestañas*/}
      <Flex justifyContent="start" mb={3} p={2}>
        {tabs.map((tab) => (
          <Box
            key={tab}
            cursor="pointer" 
            onClick={() => setActiveTab(tab)} 
          >
            <Text p={2}>{tab}</Text>
            <Box
              borderColor={activeTab === tab ? "blue.500" : "black"}
              borderBottom="2px solid"
              color={activeTab === tab ? "blue.500" : "black"}
            />
          </Box>
        ))}
      </Flex>

      {/* Aqui estoy renderizando los datos del propietario*/}
      {activeTab === "Datos del propietario" && <Demo />}
    </>
  );
};
