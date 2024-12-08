import { Flex, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { MdChevronRight, MdDeleteOutline, MdKey, MdLanguage, MdOutlineNotifications } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';

export const Configuration = () => {
  return (
    <Flex bg='white' justify='center' align='center' p={4} h={'40rem'}>
      <Stack gap={4} w='full' maxW='lg'>
        <Link
          as={RouterLink}
          display={'flex'}
          justifyContent={'space-between'}
          textDecoration={'none'}
          _hover={{ bg: 'blue.50', textDecoration: 'none' }}
        >
          <HStack gap={4}>
            <MdOutlineNotifications size={'30'} />
            <Text fontSize='2xl' fontWeight='medium' color='gray.700'>
              Configuración de Notificaciones
            </Text>
          </HStack>
          <MdChevronRight size={'30'} />
        </Link>

        <Link
          as={RouterLink}
          display={'flex'}
          justifyContent={'space-between'}
          textDecoration={'none'}
          _hover={{ bg: 'blue.50', textDecoration: 'none' }}
        >
          <HStack gap={4}>
            <MdKey size='30' />
            <Text fontSize='2xl' fontWeight='medium' color='gray.700'>
              Administración de Contraseñas
            </Text>
          </HStack>
          <MdChevronRight size={'36'} />
        </Link>

        <Link
          as={RouterLink}
          display={'flex'}
          justifyContent={'space-between'}
          textDecoration={'none'}
          _hover={{ bg: 'blue.50', textDecoration: 'none' }}
        >
          <HStack gap={4}>
            <MdDeleteOutline size='30' />
            <Text fontSize='2xl' fontWeight='medium' color='gray.700'>
              Eliminar Cuenta
            </Text>
          </HStack>
          <MdChevronRight size={'30'} />
        </Link>

        <Link
          asChild
          display={'flex'}
          justifyContent={'space-between'}
          textDecoration={'none'}
          _hover={{ bg: 'blue.50', textDecoration: 'none' }}
        >
          <RouterLink to={'/language'}>
            <HStack gap={4}>
              <MdLanguage size='30' />
              <Text fontSize='2xl' fontWeight='medium' color='gray.700'>
                Idioma
              </Text>
            </HStack>
            <MdChevronRight size={'30'} />
          </RouterLink>
        </Link>
      </Stack>
    </Flex>
  );
};
