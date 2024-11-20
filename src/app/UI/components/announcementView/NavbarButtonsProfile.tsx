import { HStack } from '@chakra-ui/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export const NavbarButtons = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null)
  const buttons = ['Editar perfil', 'Mis anuncios', 'Mis Notificaciones', 'Mi Valoración']

  return (
    <HStack wrap='wrap' gap='6'>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant='outline'
          borderColor={selectedButton === button ? 'blue.500' : 'inherit'}
          borderWidth={selectedButton === button ? '3px' : '2px'}
          onClick={() => setSelectedButton(button)}
        >
          {button}
        </Button>
      ))}
    </HStack>
  )
}
