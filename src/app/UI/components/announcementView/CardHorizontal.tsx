import { Badge, Box, Card, HStack, Image, Text } from '@chakra-ui/react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

type CardHorizontalProps = {
  title: string
  price: string
  location: string
  badges: string[]
  description: string
}

export const CardHorizontal: React.FC<CardHorizontalProps> = ({ title, price, location, badges, description }) => (
  <Box mx={8} my={4}>
    <Card.Root flexDirection={{ base: 'column', sm: 'row' }} overflow='hidden' width='100%'>
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='/public/Announcement_Image.svg'
        alt='Caffe Latte'
      />
      <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' width='100%'>
        <Card.Body flex='1' width='100%'>
          <Card.Title fontSize={20} fontWeight='bold' mb='2'>
            {title}
          </Card.Title>
          <Text fontSize='lg'>{price}</Text>
          <HStack fontSize='md' color='gray.500' alignItems='center'>
            <FaMapMarkerAlt />
            <Text>{location}</Text>
          </HStack>
          <HStack flexWrap={'wrap'} my='2'>
            {badges.map((badge, index) => (
              <Badge key={index} bgColor={'blue.400'} mr={2}>
                {badge}
              </Badge>
            ))}
          </HStack>
          <Card.Description>{description}</Card.Description>
        </Card.Body>
        <Card.Footer display='flex' justifyContent='flex-end' width='100%' mt='auto'>
          <Button variant='ghost'>Ver más &gt;</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  </Box>
)
