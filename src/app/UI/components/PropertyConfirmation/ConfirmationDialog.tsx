import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

interface ConfirmationDialogProps {
  setShowDialog: (show: boolean) => void
  title?: string
  message?: string
  subMessage?: string
  buttonText?: string
}

export const ConfirmationDialog = ({
  setShowDialog,
  title = '¡Felicitaciones! Has creado una nueva propiedad',
  message = 'Para completar la publicación, el propietario tendrá que verificar los datos de la propiedad y confirmarla para que nuevos inquilinos accedan y puedan comunicarse contigo.',
  subMessage = 'Te enviaremos una notificación en cuanto el propietario corrobore la información.',
  buttonText = 'Volver a Home',
}: ConfirmationDialogProps) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
    setShowDialog(false)
  }
  return (
    <Flex
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      h={'full'}
      w={'full'}
      gap={4}
      pt={'140px'}
    >
      <Flex
        direction={'column'}
        p={'16'}
        justifyContent={'center'}
        alignItems={'center'}
        bg={'#FCFBFB'}
        borderRadius={'sm'}
        shadow={'md'}
        w={{ base: '90%', md: '600px' }}
      >
        <Heading fontWeight={'bold'} textAlign={'center'} mb={3}>
          {title}
        </Heading>
        <Text textAlign={'center'}>{message}</Text>

        <Text textAlign={'center'}>{subMessage}</Text>
      </Flex>
      <Box pt={'65px'} w={'full'} display='flex' justifyContent='flex-end'>
        <Button onClick={goHome} bg={'#1E3A8A'}>
          {buttonText}
        </Button>
      </Box>
    </Flex>
  )
}
