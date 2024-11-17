import React from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  Avatar,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const UserProfile = () => {
  return (
    <Box width="100%" padding={5}>
      
      <Box display="flex" alignItems="center" mb={5}>
        <Avatar size="xl" name="User Name" src="https://via.placeholder.com/150" />
        <IconButton
          icon={<EditIcon />} 
          onClick={() => alert('Editar foto')}
          size="lg"
          aria-label="Editar foto"
          ml={3}
        />
        <Button ml={3} colorScheme="teal">
          Cambiar foto
        </Button>
      </Box>

      <Text mb={2}>Aceptamos formatos PNG y JPG</Text>

      {/* Formulario */}
      <FormControl mb={4}>
        <FormLabel htmlFor="first-name">Nombre</FormLabel>
        <Input id="first-name" placeholder="Escribe tu nombre" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel htmlFor="last-name">Apellido</FormLabel>
        <Input id="last-name" placeholder="Escribe tu apellido" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" placeholder="Escribe tu email" />
      </FormControl>

      <FormControl mb={4} display="flex" justifyContent="space-between">
        <Box>
          <FormLabel htmlFor="gender">Género</FormLabel>
          <Select id="gender" width="100%">
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </Select>
        </Box>

        <Box ml={5}>
          <FormLabel htmlFor="province">Provincia</FormLabel>
          <Select id="province" width="100%">
            <option value="province1">Provincia 1</option>
            <option value="province2">Provincia 2</option>
          </Select>
        </Box>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel htmlFor="address">Dirección</FormLabel>
        <Input id="address" placeholder="Escribe tu dirección" />
      </FormControl>
    </Box>
  );
};

export default UserProfile;
