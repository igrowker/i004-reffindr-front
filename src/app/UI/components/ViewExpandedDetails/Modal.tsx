import { Button } from '@/components/ui/button'
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/components/ui/dialog'

interface ModalProps {
  title: string
  body: React.ReactNode
  confirmText?: string
  cancelText?: string
  open: boolean
  onConfirm?: () => void
  onCancel?: () => void
  onClose?: () => void
}
export const Modal = ({
  title,
  body,
  confirmText = 'Aceptar',
  cancelText = 'Cancelar',
  open,
  onConfirm,
  onCancel,
  onClose,
}: ModalProps) => {
  return (
    <DialogRoot open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>{body}</DialogBody>
        <DialogFooter>
          {onCancel && (
            <DialogActionTrigger asChild>
              <Button variant='outline' onClick={onCancel} >
                {cancelText}
              </Button>
            </DialogActionTrigger>
          )}
          {onConfirm && (
            <Button onClick={onConfirm} bg='#1E3A8A'>
              {confirmText}
            </Button>
          )}
        </DialogFooter>
        <DialogCloseTrigger onClick={onClose} />
      </DialogContent>
    </DialogRoot>
  )
}
