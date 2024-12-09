import { Box, Heading, Text } from '@chakra-ui/react'

interface ReusableHeaderProps {
  title: string
  highlight: string
  description: string
  highlightColor?: string
}

export const HeaderSectionGridComponent = ({
  title,
  highlight,
  description,
  highlightColor = '#3182CE',
}: ReusableHeaderProps) => {
  const [leftTitle, rightTitle] = title.split(highlight)
  return (
    <Box textAlign='center' mb={10}>
      <Heading as='h2' fontSize='3xl' fontWeight='bold'>
        {leftTitle}
        <Text as='span' color={highlightColor}>
          {highlight}
        </Text>
        {rightTitle}
      </Heading>
      <Text fontSize='lg' mt={4} color='gray.600'>
        {description}
      </Text>
    </Box>
  )
}
