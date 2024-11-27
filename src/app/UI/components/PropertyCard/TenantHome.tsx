import { Box, Flex } from '@chakra-ui/react'
import { CardReuComponent } from '@/app/UI/components/CardInfo/CardReuComponent'



const data = [
  {
    id: 1,
    title: 'Living room Sofa 1',
    image: 'assets/sillon.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 2,
    title: 'Living room Sofa 2',
    image: 'assets/hogar.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 3,
    title: 'Living room Sofa 3',
    image: 'assets/primerhoragar.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 4,
    title: 'Living room Sofa 4',
    image: 'assets/cardimg.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 5,
    title: 'Living room Sofa 5',
    image: 'assets/hogar.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 6,
    title: 'Living room Sofa 6',
    image: 'assets/primerhoragar.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
]

export const TenantHomePage = () => {
 

  return (
      
        <Flex gap='4' flexWrap='wrap' >
          {data.map((item) => (
            <Box
              key={item.id}
            >
              <CardReuComponent maxW="300px" {...item}  />
            </Box>
          ))}
        </Flex>
  )
}
