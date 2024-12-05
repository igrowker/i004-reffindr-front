import { Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import {
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/components/ui/dialog'

interface ConfirmationModalProps {
  isOpen: boolean
  setShowModal: (v: boolean) => void;
  onConfirm: () => void // Función que no retorna nada
  onCancel: () => void // Función que no retorna nada
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, setShowModal, onConfirm, onCancel }) => {
  const { t } = useTranslation()
  // No renderiza nada si no está abierto

  return (
    <DialogRoot
      size={'sm'}
      open={isOpen}
      onOpenChange={(e) => setShowModal(e.open)}
      lazyMount
      closeOnInteractOutside
      placement={'center'}
      motionPreset='slide-in-right'
    >
      <DialogBackdrop />

      <DialogContent>
        <DialogHeader>
          <DialogTitle textAlign="center">{t('ViewEditProfile.modal.confirmation')}</DialogTitle>
        </DialogHeader>
        <DialogFooter placeContent={"center"}>
          <DialogActionTrigger asChild>
            <Button  onClick={onConfirm} variant='solid'  bg={'blue.700'}>
              {t('ViewEditProfile.modal.yes')}
            </Button>
          </DialogActionTrigger>
          <Button onClick={onCancel} variant="outline">
            {t('ViewEditProfile.modal.cancel')}
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
    // <Box
    //   position="fixed"
    //   top="0"
    //   left="0"
    //   w="100vw"
    //   h="100vh"
    //   bg="rgba(0, 0, 0, 0.5)"
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <Box bg="white" p="6" borderRadius="md" boxShadow="lg">
    //     <Text>
    //       {t('ViewEditProfile.modal.confirmation')}
    //     </Text>
    //     <Flex mt="4" justifyContent="space-between">
    //       <Button bg="blue.700" onClick={onConfirm} >
    //       {t('ViewEditProfile.modal.yes')}
    //       </Button>
    //       <Button bg={"red.500"} onClick={onCancel} >
    //       {t('ViewEditProfile.modal.cancel')}
    //       </Button>
    //     </Flex>
    //   </Box>
    // </Box>
  )
}
