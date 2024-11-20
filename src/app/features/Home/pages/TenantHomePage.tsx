import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'

import { CardReuComponent } from '@/app/UI/components/CardInfo/CardReuComponent'

import Sidebar from '../../../UI/components/Sidebar/Sidebar'

const data = [
  {
    id: 1,
    title: 'Living room Sofa',
    image: 'assets/cardimg.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 2,
    title: 'Living room Sofa',
    image: 'assets/cardimg.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 3,
    title: 'Living room Sofa',
    image: 'assets/cardimg.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 4,
    title: 'Living room Sofa',
    image: 'assets/cardimg.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 5,
    title: 'Living room Sofa',
    image: 'assets/cardimg.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
  {
    id: 6,
    title: 'Living room Sofa',
    image: 'assets/cardimg.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
]

export const TenantHomePage = () => {
  const [openRightBar, setOpenRightBar] = useState(false)
  const [activeCardId, setActiveCardId] = useState<number | null>(null)

  return (
    <Flex h='100vh'>
      <Box>
        <Sidebar />
      </Box>
      <Box flex='1' bg='gray.50' p='2' overflowY='auto'>
        <Flex gap='4' flexWrap='wrap' justifyContent='center' alignItems='start'>
          {data.map((item) => (
            <Box
              key={item.id}
              onMouseEnter={() => {
                setOpenRightBar(true)
                setActiveCardId(item.id)
                console.log(data.find((it) => item.id === it.id))
              }}
              onMouseLeave={() => {
                // setOpenRightBar(false)
                setActiveCardId(null)
              }}
            >
              <CardReuComponent {...item} isActive={activeCardId === item.id} maxW={openRightBar ? '300px' : '350px'} />
            </Box>
          ))}
        </Flex>
      </Box>
      {openRightBar && <Sidebar />}
    </Flex>
  )
}
