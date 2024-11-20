import { Button, Fieldset, Flex, Input, Box, Text } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { GoPencil } from "react-icons/go";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"
import { Avatar } from "@/components/ui/avatar"

export const ViewEditProfile = () => {
  return (
    <Flex w={'full'} h={'100vh'} padding={'5'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Fieldset.Root size="lg" maxW="xl" spaceY={'16 '} display={'flex'} flexDirection={{base:'column', md:'row'}} gap={'8'}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} gapY={1}>
          <Box position={'relative'} display={'inline-block'}>
          <Avatar w={'7em'} h={'7em'} src="/public/AvatarImage1.png" />
          <Button
          position="absolute"
          bottom="1px"
          right="-2"
          bg="gray.300"
          borderRadius="full"
          p="0.5"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="lg"
          >
            <GoPencil />
          </Button>
          </Box>
          <Text textAlign={'center'} py={'1'} px={'3'} bg={'gray.100'} borderRadius={'sm'}>Lautaro Fazzito</Text>
          <Text>Inquilino</Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gapY={'5'}>
          <Box display={'flex'} gap={'3'} flexDirection={{base:'column', md:'row'}}>
            <Field label="Name">
              <Input name="name" placeholder="Lautaro"/>
            </Field>
            <Field label="Apellido:">
              <Input name="apellido" placeholder="Fazzito"/>
            </Field>
          </Box>
          <Box display={'flex'} gap={'3'} flexDirection={{base:'column', md:'row'}}>
          <Field label="Número de documento:">
              <Input placeholder="XX.XXX.XXX" type="number" name="numeroDocumento" />
            </Field>
          <Field label="Rango salarial">
              <NativeSelectRoot>
                <NativeSelectField
                  name="rangoSalarial"
                  items={[
                    'Selecionar una opción',
                    "500 a 750 Dolares",
                    "751 a 1000 Dolares"
                  ]}
                />
              </NativeSelectRoot>
            </Field>
          </Box>
            <Field label="Email address">
              <Input name="email" type="email" placeholder="xxxx@gmail.com"/>
            </Field>
            <Box display={'flex'} gap={'3'} flexDirection={{base:'column', md:'row'}}>
            <Field label="Genero:">
              <NativeSelectRoot>
                <NativeSelectField
                  name="genero"
                  items={[
                    "Selecciona una opción",
                    
                  ]}
                />
              </NativeSelectRoot>
            </Field>
            <Field label="Provincia:">
              <NativeSelectRoot>
                <NativeSelectField
                  name="provincia"
                  items={[
                    "Selecciona una opción",
                    
                  ]}
                />
              </NativeSelectRoot>
            </Field>
          </Box>
          <Field label="Dirección:">
              <Input name="direccion" type="text" placeholder="Escribe tu dirección" />
            </Field>
          <Button type="submit" alignSelf="flex-start">
            Submit
          </Button>
        </Box>
      </Fieldset.Root>
    </Flex>
  )
}
