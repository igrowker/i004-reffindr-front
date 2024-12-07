import { Box, Button, Fieldset, Grid, GridItem, Input, Stack } from '@chakra-ui/react'

import { Checkbox } from '@/components/ui/checkbox'
import { Field } from '@/components/ui/field'

interface OwnerFormProps {
  formState: {
    ownerName: string
    ownerPhone: string
    ownerEmail: string
    ownerAddress: string
  }
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onNextOwner: () => void
}

const Message = () => {
  return (
    <Box
      background='white'
      width='100%'
      padding='4'
      color='black'
      mt='4'
      boxShadow='xl'
      borderRadius='lg'
      opacity='0.95'
      border='1px solid #ccc'
      maxWidth='800px'
    >
      {/* Texto del mensaje */}
      <Box mb='6'>
        Le llegará un email de confirmación con cuatro números al propietario para que el mismo pueda ingresar a su
        cuenta y confirmar su propiedad.
      </Box>
    </Box>
  )
}

export const OwnerData: React.FC<OwnerFormProps> = ({ onNextOwner, formState, handleInputChange }) => {
  const handleNextOwner = () => {
    onNextOwner()
  }

  return (
    <Box px={8} py={8}>
      {/* Formulariodel propietario */}
      <Fieldset.Root size='lg'>
        <Fieldset.Content>
          <Grid gridTemplateColumns='repeat(2,1fr)' gap={4}>
            
           
          </Grid>
          <Stack direction='row' gap='4'>
            <Field label='Email'>
              <Input
                name='ownerEmail'
                type='email'
                placeholder='Escribe el email'
                value={formState.ownerEmail}
                onChange={handleInputChange}
              />
            </Field>
          </Stack>

          
         
        </Fieldset.Content>
      </Fieldset.Root>

      

      <Box textAlign='right' mt='4'>
        <Button onClick={handleNextOwner} colorScheme='blue' width='auto'>
          Siguiente
        </Button>
      </Box>
    </Box>
  )
}
