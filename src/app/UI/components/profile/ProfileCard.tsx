import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { IoLocationOutline } from 'react-icons/io5';

import { Rating } from '@/components/ui/rating';

interface Props {
  user: ProvisionalUser;
  description: string;
}

interface ProvisionalUser {
  firstName: string;
  surname: string;
  rating: number;
  city: string;
  province: string;
}

export const ProfileCard = ({ description, user }: Props) => {
  return (
    <Flex
      bg={'white'}
      flexDirection={{ base: 'column', md: 'row' }}
      maxW={'90%'}
      height={{ base: 'auto', md: '250px' }}
      mx={'auto'}
      rounded='xs'
      shadow={'md'}
      gapX={4}
      border='1px solid transparent'
      transition='box-shadow 0.3s ease-in-out, border 0.3s ease-in-out'
      _hover={{
        border: '1px solid #2175D9',
        boxShadow: '0px 10px 20px rgba(38, 80, 204, 0.1)',
      }}
    >
      <Image
        flexShrink={0}
        w={{ base: 'full', md: '1/4' }}
        h={{ base: '300px', md: '250px' }}
        src={'/public/tamara-bellis-A3Gd2b-98_g-unsplash.jpg'}
      />
      <Box pt={2} pb={4} px={4} overflow='auto'>
        <Heading py={2}>
          {user.firstName} {user.surname}
        </Heading>
        <Text>Propietaria de "xxxx"</Text>
        <Rating py={1} defaultValue={user.rating} allowHalf readOnly />
        <Flex my={2} alignItems={'center'}>
          <IoLocationOutline size={16} />
          <Text ml={4}>
            {user.city}, {user.province}
          </Text>
        </Flex>
        <Text w={'95%'}>“{description}”</Text>
      </Box>
    </Flex>
  );
};
