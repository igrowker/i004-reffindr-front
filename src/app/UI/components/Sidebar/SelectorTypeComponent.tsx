import { Box, Button, HStack } from '@chakra-ui/react'
import { useState } from 'react'



export const SelectorTypeComponent = () => {
  const [selectedType, setSelectedType] = useState<'entrante' | 'saliente'>('entrante')

  return (
    <HStack wrap='wrap' mb={2} gap='6'>
      <Box borderBottom={selectedType === 'entrante' ? '3px solid #1E3A8A' : undefined}>
        <Button onClick={() => setSelectedType('entrante')} variant='plain'>
          Entrante
        </Button>
      </Box>
      <Box borderBottom={selectedType === 'saliente' ? '3px solid #1E3A8A' : undefined}>
        <Button onClick={() => setSelectedType('saliente')} variant='plain'>
          Saliente
        </Button>
      </Box>
    </HStack>
  )
}
