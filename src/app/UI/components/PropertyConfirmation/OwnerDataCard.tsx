import { Card, Heading, Stack, Strong, Text } from '@chakra-ui/react'

interface OwnerDataCardProps {
    ownerData: {
        id: number
        name: string
        email: string
        phone: string
        address: string
      }
}

export const OwnerDataCard = ({ ownerData }: OwnerDataCardProps) => {
  return (
    <Stack gap={4} flex='1'>
      <Card.Root size='md'>
        <Card.Header>
          <Heading size='md'> {ownerData.name}</Heading>
        </Card.Header>
        <Card.Body color='fg.muted'>
          <Text>
            <Strong>Email:</Strong> {ownerData.email}
          </Text>
          <Text>
            <Strong>Telefono:</Strong> {ownerData.phone}
          </Text>
          <Text>
            <Strong>Direccion:</Strong> {ownerData.address}
          </Text>
        </Card.Body>
      </Card.Root>
    </Stack>
  )
}
