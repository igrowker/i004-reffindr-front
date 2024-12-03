import { Grid, GridItem, Image } from '@chakra-ui/react'

interface ImgGridProps {
  images: string[]
}

export const ImgGrid = ({ images }: ImgGridProps) => {
  return (
    <Grid h='500px' w='100%' templateRows='repeat(2, minmax(0, 1fr))' templateColumns='repeat(4, 1fr)' gap={2}>
      {images.map((image, index) => (
        <GridItem key={index} colSpan={index === 0 ? 2 : 1} rowSpan={index === 0 ? 2 : 1}>
          <Image src={image} alt={`property ${index + 1}`} w='full' h='full' objectFit='cover' borderRadius='md' />
        </GridItem>
      ))}
    </Grid>
  )
}
