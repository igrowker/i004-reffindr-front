import { Avatar, Box, Flex, Float, Grid, IconButton, Text } from '@chakra-ui/react'
import { MdEdit } from 'react-icons/md'

import { Rating } from '@/components/ui/rating'

import { ProfileCard } from './ProfileCard'

export const MyRatingProfile = () => {
  return (
    <Box>
      <Flex flexDirection='column' gap={2}>
        <Avatar.Root size='2xl'>
          <Avatar.Image src='/public/AvatarImage1.png' />
          <Avatar.Fallback>LF</Avatar.Fallback>
          <Float placement={'bottom-end'} offset={'2'}>
            <IconButton rounded='full' size={'xs'} bg='#efefef' color='black' outline='0.2em solid' outlineColor='bg'>
              <MdEdit />
            </IconButton>
          </Float>
        </Avatar.Root>
        <Text fontWeight={600}>Lautaro Fazzito</Text>
        <Rating allowHalf readOnly value={4.5} />
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
              city: 'Recoleta',
            }}
          />
        ))}
      </Grid>
    </Box>
  )
}
