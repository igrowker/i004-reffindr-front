import { Button } from '@/components/ui/button'

interface ButtonIconProps {
  icon: React.ReactNode
  text: string
  onClick?: () => void
}

export const ButtonIconComponent = ({ icon, text, onClick }: ButtonIconProps) => {
  return (
    <Button
      size='sm'
      colorScheme='teal'
      border='1px solid'
      borderColor='gray.300'
      variant='solid'
      color='black'
      bg='white'
      _hover={{ bg: 'gray.100', border: 'solid 1px #383737' }}
      display='flex'
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
