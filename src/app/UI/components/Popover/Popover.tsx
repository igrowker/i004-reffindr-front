import { Box, Text } from '@chakra-ui/react'
import React from 'react'

import { PopoverArrow, PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger } from '@/components/ui/popover'

interface ErrorPopoverProps {
  errorsMessage: string[]
}

export const ErrorPopover: React.FC<ErrorPopoverProps> = ({ errorsMessage }) => {
  return (
    <Box position={'absolute'} top={235} left={10}>
      <PopoverRoot open={errorsMessage.length > 0} positioning={{ placement: 'bottom-start' }}>
        <PopoverTrigger>
          <Box></Box>
        </PopoverTrigger>
        <PopoverContent bottom={-7} width={'auto'}>
          <PopoverArrow />
          <PopoverBody>
            {errorsMessage.map((error, index) => (
              <Text key={index} color='red.500'>
                {error}
              </Text>
            ))}
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </Box>
  )
}
