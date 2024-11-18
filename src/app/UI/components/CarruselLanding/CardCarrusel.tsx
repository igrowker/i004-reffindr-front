import { Card } from '@chakra-ui/react'
import { Avatar, Box, Circle, Float, Image, Stack, Text } from '@chakra-ui/react'

export const CardCarrusel = ({
  description,
  avatar,
  userName,
  userRole,
}: {
  description: string
  avatar: string
  userName: string
  userRole: string
}) => {
  const inicials = userName
    .split(' ')
    .map((name) => name.charAt(0))
    .join('')

  return (
    <Card.Root width='400px' height='650px' background={'#EDF2F7'}>
      <Card.Body gap='2'>
        <Card.Title mt='2'>
          <Box p={2}>
            <Image src='public/Quotation_Marks.svg' />
          </Box>
        </Card.Title>
        <Card.Description p={3} fontSize={'20px'} fontWeight={'medium'}>
          {description}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent='flex-strat'>
        <Avatar.Root colorPalette='green' variant='subtle' size={'2xl'} mb={10}>
          <Avatar.Image src={avatar} />
          <Avatar.Fallback>{inicials}</Avatar.Fallback>
          <Float placement='bottom-end' offsetX='1' offsetY='1'>
            <Circle bg='green.500' size='8px' outline='0.2em solid' outlineColor='bg' />
          </Float>
        </Avatar.Root>
        <Stack gap='0'>
          <Text fontWeight='medium' fontSize={'2xl'}>
            {userName}
          </Text>
          <Text color='#146EB4' textStyle='sm' textDecoration={'underline'}>
            {userRole}
          </Text>
        </Stack>
      </Card.Footer>
    </Card.Root>
  )
}
