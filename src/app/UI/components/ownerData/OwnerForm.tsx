import { Box, Button, Fieldset, Grid, GridItem, Input, Stack } from '@chakra-ui/react'

import { Checkbox } from '@/components/ui/checkbox'
import { Field } from '@/components/ui/field'

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

// este es mi compomente principal Demo
export const OwnerData = () => {
  return (
    <Box px={8} py={8}>
      {/* Formulariodel propietario */}
      <Fieldset.Root size='lg'>
        <Fieldset.Content>
          <Grid gridTemplateColumns='repeat(2,1fr)' gap={4}>
            <GridItem>
              <Field label='Nombre del propietario'>
                <Input name='name' placeholder='Escribe el nombre' />
              </Field>
            </GridItem>
            <GridItem>
              <Field label='Celular'>
                <Input name='phone' type='tel' placeholder='Escribe tu número de celular' />
              </Field>
            </GridItem>
          </Grid>
          {/* <Stack direction='row' gap='4'>
            <Field label='Email'>
              <Input name='email' type='email' placeholder='Escribe el email' />
            </Field>
          </Stack> */}

          <GridItem colSpan={1}>
            <Field label='Celular'>
              <Input name='phone' type='tel' placeholder='Escribe tu número de celular' />
            </Field>
          </GridItem>
          <GridItem colSpan={2}>
            <Message />
          </GridItem>
        </Fieldset.Content>
      </Fieldset.Root>

      <Stack direction='row' gap='4' mb='4' mt='6' justify='flex-start'>
        <Checkbox> Acepto </Checkbox>
        <Checkbox> No lo acepto </Checkbox>
      </Stack>

      <Box textAlign='right' mt='4'>
        <Button bg='#1e3a8a' width='auto'>
          Siguiente
        </Button>
      </Box>
    </Box>
  )
}
