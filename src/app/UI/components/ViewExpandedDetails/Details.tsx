import { Badge, Box, Flex, IconButton, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa6'
import { RiMapPin2Line } from 'react-icons/ri'

//import { Rating } from '@/components/ui/rating'

interface DetailsProps {
  title: string
  price: number
  location: string
  features: string[]
  description: string
  showRating?: boolean
  //setRating?: (value: number) => void
  //rating?: number
}

export const Details = ({
  title,
  price,
  location,
  features,
  description,
  //showRating,
  //setRating,
  //rating,
}: DetailsProps) => {
  const [isFavorited, setIsFavorited] = useState(false)

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }
  return (
    <Box>
      <Flex alignItems='center' gap='2'>
        <Text as='h1' fontSize='xl' fontWeight='bold'>
          {title}
        </Text>
        <IconButton
          aria-label='Call support'
          ml='auto'
          rounded='full'
          bg='transparent'
          color={isFavorited ? 'red.500' : 'gray.700'}
          onClick={toggleFavorite}
        >
          <FaHeart />
        </IconButton>
      </Flex>

      {/* {showRating && rating !== undefined && (
        <HStack gap={2}>
          <Rating allowHalf defaultValue={rating} onValueChange={({ value }) => setRating?.(value)} />
          <Flex alignItems='center' gap='1'>
            <Text>
              {rating} <span>Star</span>
            </Text>
            <Text>10 reviews</Text>
          </Flex>
        </HStack>
      )} */}

      <Text textStyle='2xl' fontWeight='medium' letterSpacing='tight' mt='2'>
        ${price}
      </Text>

      <Text letterSpacing='tight' mt='2' mb='2'>
        <Flex alignItems='center' gap='1'>
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

      <Box mt='4' mb='4'>
        <Text>{description}</Text>
      </Box>
    </Box>
  )
}
