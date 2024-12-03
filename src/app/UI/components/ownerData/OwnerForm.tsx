import { Box, Stack, Fieldset, Input, Button } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";


const Message = () => {
  return (
    <Box
      background="white" 
      width="100%"
      padding="4" 
      color="black" 
      mt="4" 
      boxShadow="xl" 
      borderRadius="lg" 
      opacity="0.95" 
      border="1px solid #ccc" 
      maxWidth="800px" 
    >
      {/* Texto del mensaje */}
      <Box mb="6">
        Le llegará un email de confirmación con cuatro números al propietario para que
        el mismo pueda ingresar a su cuenta y confirmar su propiedad.
      </Box>
    </Box>
  );
};

// este es mi compomente principal Demo
const Demo = () => {
  return (
    <Box
      padding="20"
      rounded="md"
      borderWidth="1px"
      maxW="800px"
      ml="10" 
      mt="10" 
      boxShadow="lg" 
    >
      {/* Formulariodel propietario */}
      <Fieldset.Root size="lg">
        <Fieldset.Content>
          <Stack direction="row" gap="4">
            <Field label="Nombre del propietario">
              <Input name="name" placeholder="Escribe el nombre" />
            </Field>
            <Field label="Email">
              <Input name="email" type="email" placeholder="Escribe el email" />
            </Field>
          </Stack>

          <Field label="Celular" mt="4">
            <Input
              name="phone"
              type="tel"
              placeholder="Escribe tu número de celular"
            />
          </Field>
        </Fieldset.Content>
      </Fieldset.Root>

      
      <Message />

      
      <Stack direction="row" gap="4" mb="4" mt="6" justify="flex-start">
        <Checkbox> Acepto </Checkbox>
        <Checkbox> No lo acepto </Checkbox>
      </Stack>

      
      <Box textAlign="right" mt="4">
        <Button
          colorScheme="blue" 
          width="auto" 
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default Demo;
