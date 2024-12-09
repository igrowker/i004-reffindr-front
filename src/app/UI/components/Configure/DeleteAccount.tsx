import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';


export const DeleteAccount = () => {
  const { t } = useTranslation()
  return (
    <Flex bg='white' justify='center' align='center' p={4} h={'40rem'}>
      <Stack gap={4} w='full' maxW='lg'>
        <Text fontSize={'3xl'}>{t('configure.delete-account.text-1')}</Text>
        <Text fontSize={'xl'}>{t('configure.delete-account.text-2')}</Text>
        <Box display={'flex'} gap={4}>
        <Button bg={'blue'} _hover={{bg:'blue.500'}}>{t('configure.delete-account.button-cancel')}</Button>
        <Button bg={'blue'} _hover={{bg:'blue.500'}}>{t('configure.delete-account.button-delete')}</Button>
        </Box>
      </Stack>
    </Flex>
  );
};