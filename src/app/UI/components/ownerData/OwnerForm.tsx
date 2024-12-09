import { Box, Button, Fieldset, Grid, Input, Stack } from '@chakra-ui/react'

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
