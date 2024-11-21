import { Badge, Box, Card, Flex, IconButton, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { CiHeart } from 'react-icons/ci'
import { RiMapPin2Line } from 'react-icons/ri'

export interface InfoBarProps {
  id: number
  title: string
  image: string
  price: number
  location: string
  features: string[]
  description: string
}

export const InfoBar = ({ id, title, image, price, location, features, description }: InfoBarProps) => {
  const sidebarWidth = useBreakpointValue({ base: '277px' })

  return (
    <Box mt='20'>
      <Card.Root key={id} maxW='sm' overflow='hidden' h='100%' w={sidebarWidth} borderRadius='0'>
        <Image src={image} alt='Hogar' h='200px' objectFit='cover' borderRadius='0' />
        <Card.Body gap='2'>
          <Flex alignItems='center' gap='2'>
            <Card.Title>{title}</Card.Title>
            <IconButton aria-label='Call support' ml='auto' rounded='full' bg='transparent' color='black'>
              <CiHeart />
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

          <Card.Description>{description}</Card.Description>
        </Card.Body>
      </Card.Root>
    </Box>
  )
}
