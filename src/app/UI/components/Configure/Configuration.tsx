import { Flex, Stack, Text, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MdLanguage, MdOutlineNotifications, MdKey, MdDeleteOutline, MdChevronRight } from "react-icons/md";

export const Configuration = () => {
  return (
    <Flex bg="white" justify="center" align="center" p={4} h={'40rem'}>
      <Stack gap={6} w="full" maxW="lg">
        <Link as={RouterLink} display={'flex'} justifyContent={'space-between'} textDecoration={'none'} _hover={{ textDecoration: "underline" }}>
          <HStack gap={4}>
          <MdOutlineNotifications size={'36'}/>
            <Text fontSize="2xl" fontWeight="medium">
              Configuración de Notificaciones
            </Text>
          </HStack>
          <MdChevronRight size={'36'}/>
        </Link>

        <Link as={RouterLink} display={'flex'} justifyContent={'space-between'} textDecoration={'none'} _hover={{ textDecoration: "underline" }}>
          <HStack gap={4}>
            <MdKey size="36" />
            <Text fontSize="2xl" fontWeight="medium">
              Administración de Contraseñas
            </Text>
          </HStack>
          <MdChevronRight size={'36'}/>
        </Link>

        <Link as={RouterLink} display={'flex'} justifyContent={'space-between'} textDecoration={'none'} _hover={{ textDecoration: "underline" }}>
          <HStack gap={4}>
            <MdDeleteOutline  size="36" />
            <Text fontSize="2xl" fontWeight="medium">
              Eliminar Cuenta
            </Text>
          </HStack>
          <MdChevronRight size={'36'}/>
        </Link>
        
        <Link asChild display={'flex'} justifyContent={'space-between'} textDecoration={'none'} _hover={{ textDecoration: "underline" }} border={'none'}>
          <RouterLink to={'/language'}>
          <HStack gap={4} >
            <MdLanguage size="36" />
            <Text fontSize="2xl" fontWeight="medium">
              Idioma
            </Text>
          </HStack>
          <MdChevronRight size={'36'}/>
          </RouterLink>
        </Link>
        
      </Stack>
    </Flex>
  );
};
