import { Badge, Box, Button, Card, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { FaRegHeart } from 'react-icons/fa'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { RiMapPin2Line } from 'react-icons/ri'

interface CardReuProps {
  title: string
  image: string
  description: string
  price: number
  location: string
  features: string[]
  isActive: boolean
  maxW: string
}

export const CardReuComponent = ({
  title,
  description,
  price,
  location,
  image,
  features,
  isActive,
  maxW,
}: CardReuProps) => {
  return (
    <Card.Root
      maxW={maxW}
      overflow='hidden'
      shadow='md'
      borderRadius='lg'
      boxShadow={isActive ? '0px 10px 20px rgba(38, 80, 204, 0.4)' : '0px 4px 8px rgba(0, 0, 0, 0.1)'}
      transition='box-shadow 0.3s ease-in-out'
    >
      <Image src={image} alt={title} h='200px' objectFit='cover' />
      <Card.Body gap='1'>
        <Flex alignItems='center' gap='2'>
          <Card.Title>{title}</Card.Title>
          <IconButton aria-label='Call support' ml='auto' rounded='full' bg='blue.400' _hover={{ bg: 'blue.600' }}>
            <FaRegHeart />
          </IconButton>
        </Flex>

        <Text textStyle='2xl' fontWeight='medium' letterSpacing='tight' mt='2'>
          {price}
        </Text>
        <Text letterSpacing='tight' mt='2'>
          <Flex alignItems='center' gap='2'>
            <RiMapPin2Line />
            {location}
          </Flex>
        </Text>
        <Box display='flex' gap='2'>
          {features.map((feature) => (
            <Badge variant='solid' bg='#3182CE' size='md'>
              {feature}
            </Badge>
          ))}
        </Box>

        <Card.Description>
          <Text lineClamp='2'>{description}</Text>
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button variant='ghost' ml='auto'>
          Ver más <IoChevronForwardSharp />
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}
