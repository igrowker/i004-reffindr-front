import { Button } from '@/components/ui/button'

interface ButtonIconProps {
  icon: React.ReactNode
  text: string
  onClick?: () => void;
  isActive: boolean;
}

export const ButtonIconComponent = ({ icon, text, onClick, isActive }: ButtonIconProps) => {
  return (
    <Button
      size='sm'
      colorScheme='teal'
      borderColor={isActive ? '#1e3a8a' : 'gray.300'}
      variant='outline'
      _hover={{ bg: 'gray.100', border: 'solid 1px #383737' }}
      display='flex'
      color={isActive ? '#1e3a8a' : 'black'}
      alignItems='center'
      justifyContent='flex-start'
      width='100%'
      onClick={onClick}
    >
      {icon}
      {text}
    </Button>
  )
}
