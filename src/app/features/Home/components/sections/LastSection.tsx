import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

interface Props {
  items: { title: string; description: string }[]
  img: string
}

export const LastSection = ({ items, img }: Props) => {
  return (
    <Flex
      minH={'100vh'}
      alignItems={'center'}
      flexDirection={{ lg: 'row', base: 'column' }}
      justifyContent='center'
      p={4}
      gap={20}
    >
      <Box minW={260} maxW={500}>
        {items.map((item, i) => (
          <Box divideY={'2px'}>
            <Heading wordBreak='break-word' py={2}>
              {i + 1}. {item.title}
            </Heading>
            <Text wordBreak='break-word' py={2} pl={5}>
              {item.description}
            </Text>
          </Box>
        ))}
      </Box>
      <Image aspectRatio={4 / 3} h={300} w={500} rounded={'4xl'} src={img} />
    </Flex>
  )
}
