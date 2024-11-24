import { Avatar, Box, Flex, Float, Grid, IconButton, Text } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'

import { Rating } from '@/components/ui/rating'

import { ProfileCard } from './ProfileCard'


export const MyRatingProfile = () => {

  //TODO: obtener valores del usuario en este componente mediante el store global
  return (
    <Box>
      <Flex alignItems="center" py={4} flexDirection='column' gap={2}>
        <Avatar.Root w={32} h={32}>
          <Avatar.Image src='/public/AvatarImage1.png' />
          <Avatar.Fallback>LF</Avatar.Fallback>
          <Float placement={'bottom-end'} offset="4">
            <IconButton rounded='full' size={'md'} bg='#efefef' color='black' outline='0.3em solid' outlineColor='bg'>
              <MdEdit />
            </IconButton>
          </Float>
        </Avatar.Root>
        <Text fontSize="lg" fontWeight={600}>Lautaro Fazzito</Text>
        <Rating  allowHalf readOnly value={4.5} />
        <Text color="gray.700">({4.5} stars)</Text>
      </Flex>
      <Grid columns={1} gapY={6}>
        {[1, 2, 3, 4, 5, 6].map((d) => (
          <ProfileCard
            key={d}
            description='Un lujo Lautaro como inquilino. Cumplió y respetó todo lo pactado en el contrato de principio a fin y abandonó la propiedad dejándola perfectas condiciones.'
            user={{
              firstName: 'Camila',
              surname: 'Hernandez',
              rating: 4.5,
              province: 'Buenos Aires',
              city: 'Recoleta',
            }}
          />
        ))}
      </Grid>
    </Box>
  )
}
