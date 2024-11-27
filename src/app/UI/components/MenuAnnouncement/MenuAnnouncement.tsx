import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Demo from "../../../UI/components/ownerData/OwnerForm";


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

      {/* Aqui renderizo los dtos del formulario solo si "Datos del propietario" está activo */}
      {activeTab === "Datos del propietario" && <Demo />}
    </>
  );
};


