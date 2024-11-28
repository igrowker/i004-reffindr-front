import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void; // Función que no retorna nada
  onCancel: () => void;  // Función que no retorna nada
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  const { t } = useTranslation()
  if (!isOpen) return null; // No renderiza nada si no está abierto


  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      bg="rgba(0, 0, 0, 0.5)"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg="white" p="6" borderRadius="md" boxShadow="lg">
        <Text>
          {t('ViewEditProfile.modal.confirmation')}
        </Text>
        <Flex mt="4" justifyContent="space-between">
          <Button bg={'blue'} onClick={onConfirm} colorScheme="blue">
          {t('ViewEditProfile.modal.yes')}
          </Button>
          <Button bg={'blue'} onClick={onCancel} colorScheme="gray">
          {t('ViewEditProfile.modal.cancel')}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
