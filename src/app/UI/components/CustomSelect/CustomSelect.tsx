import { Box, Text } from '@chakra-ui/react'

import { NativeSelectField, NativeSelectRoot } from '@/components/ui/native-select'

interface CustomSelectProps {
  label: string
  options: { value: string; label: string }[]
}

const CustomSelect = ({ label, options }: CustomSelectProps) => {
  return (
    <Box mb={4} w={'100%'}>
      <Text mb={2} fontWeight={'bold'}>
        {label}{' '}
      </Text>
      <NativeSelectRoot size='sm' width={'100%'}>
        <NativeSelectField placeholder={`Seleccionar una opción`} width={'100%'}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </NativeSelectField>
      </NativeSelectRoot>
    </Box>
  )
}

export default CustomSelect
