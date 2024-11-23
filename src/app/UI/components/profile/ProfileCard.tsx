import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { IoLocationOutline } from 'react-icons/io5'

import { Rating } from '@/components/ui/rating'

interface Props {
  user: ProvisionalUser
  description: string
}

interface ProvisionalUser {
  firstName: string
  surname: string
  rating: number
  city: string
  province: string;
}

export const ProfileCard = ({ description, user }: Props) => {
  return (
    <Flex maxW={'90%'} height={250} mx={'auto'} rounded='xs' shadow={'md'} gapX={4}>
      <Image flexShrink={0} w={'1/4'} src={'/public/tamara-bellis-A3Gd2b-98_g-unsplash.jpg'} />
      <Box py={2} overflow='auto'>
        <Heading py={2}>
          {user.firstName} {user.surname}
        </Heading>
        <Text>Propietaria de "xxxx"</Text>
        <Rating py={1} defaultValue={user.rating} allowHalf readOnly />
        <Flex alignItems={'center'}>
          <IoLocationOutline size={16} />
          <Text ml={4}>{user.city}, {user.province}</Text>
        </Flex>
        <Text w={'95%'}>“{description}”</Text>
      </Box>
    </Flex>
  )
}
