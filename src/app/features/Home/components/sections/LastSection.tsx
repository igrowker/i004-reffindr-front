import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

interface Props {
  items: { title: string; description: string }[]
  img: string
}

export const LastSection = ({ items, img }: Props) => {
  return (
    <Flex
      mb={10}
      alignItems={'center'}
      flexDirection={{ lg: 'row', base: 'column' }}
      justifyContent='space-around'
      p={4}
      gap={20}
    >
      <Box minW={260} maxW={500}>
        {items.map((item, i) => (
          <Box key={i} divideY={'2px'} fontSize={'xl'}>
            <Heading wordBreak='break-word' py={2}>
              {i + 1}. {item.title}
            </Heading>
            <Text wordBreak='break-word' pt={2} pb={4} pl={5}>
              {item.description}
            </Text>
          </Box>
        ))}
      </Box>
      <Image aspectRatio={4 / 3} h={400} w={600} rounded={'4xl'} src={img} />
    </Flex>
  )
}
