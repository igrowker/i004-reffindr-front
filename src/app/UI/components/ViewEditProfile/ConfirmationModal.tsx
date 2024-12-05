import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

interface ConfirmationModalProps {
  isOpen: boolean
  onConfirm: () => void // Función que no retorna nada
  onCancel: () => void // Función que no retorna nada
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  const { t } = useTranslation()
  if (!isOpen) return null // No renderiza nada si no está abierto

  return (
    <Box
      position='fixed'
      top='0'
      left='0'
      w='100vw'
      h='100vh'
      bg='rgba(0, 0, 0, 0.5)'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Box bg='white' p='6' borderRadius='md' boxShadow='lg'>
        <Text>{t('ViewEditProfile.modal.confirmation')}</Text>
        <Flex mt='4' justifyContent='flex-end' gap={4}>
          <Button size={'sm'} bg={'#1e3a8a'} onClick={onCancel} colorScheme='gray' _hover={{ bg: 'red.600' }}>
            {t('ViewEditProfile.modal.cancel')}
          </Button>
          <Button size={'sm'} bg={'#1e3a8a'} onClick={onConfirm} _hover={{ bg: '#2a50bf' }}>
            {t('ViewEditProfile.modal.yes')}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
