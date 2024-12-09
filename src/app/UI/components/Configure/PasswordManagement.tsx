import { Flex, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { MdChevronRight } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';

export const PasswordManagement = () => {
  const { t } = useTranslation()
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
            <Text fontSize='2xl' fontWeight='medium' color='gray.700'>
              {t('configure.passwordManagement.two-step-verification')}
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
            <Text fontSize='2xl' fontWeight='medium' color='gray.700'>
            {t('configure.passwordManagement.change-password')}
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
            <Text fontSize='2xl' fontWeight='medium' color='gray.700'>
            {t('configure.passwordManagement.password-vulnerability')}
            </Text>
          </HStack>
          <MdChevronRight size={'30'} />
        </Link>
      </Stack>
    </Flex>
  );
};