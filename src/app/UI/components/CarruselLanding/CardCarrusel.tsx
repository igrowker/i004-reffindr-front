import { Card } from '@chakra-ui/react'
import { Avatar, Circle, Float, Stack, Text } from '@chakra-ui/react'

export const CardCarrusel = ({ description, avatar, userName }: { description: string, avatar: string, userName: string }) => {
  const inicials = userName.split(' ').map((name) => name.charAt(0)).join('')

  return (
    <Card.Root width='350px' height='600px' background={'#EDF2F7'}>
      <Card.Body gap='2'>
        <Card.Title mt='2'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src='public/Quotation_Marks.svg' alt='Vector Icon' style={{ width: '60px', height: '60px' }} />
          </div>
        </Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent='flex-strat'>
        <Avatar.Root colorPalette='green' variant='subtle'>
          <Avatar.Image src={avatar} />
          <Avatar.Fallback>{inicials}</Avatar.Fallback>
          <Float placement='bottom-end' offsetX='1' offsetY='1'>
            <Circle bg='green.500' size='8px' outline='0.2em solid' outlineColor='bg' />
          </Float>
        </Avatar.Root>
        <Stack gap='0'>
          <Text fontWeight='medium'>{userName}</Text>
          <Text color='#146EB4' textStyle='sm' textDecoration={'underline'}>
            Propietario
          </Text>
        </Stack>
      </Card.Footer>
    </Card.Root>
  )
}
