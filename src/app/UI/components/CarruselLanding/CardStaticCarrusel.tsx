import { Box, Text, Flex } from '@chakra-ui/react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'


import { Button } from '@/components/ui/button'

import { CardCarrusel } from './CardCarrusel'
import { useState } from 'react'

export const CardStaticCarrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const users = [
    {
      description:
        'Estoy encantado con mi experiencia usando Reffindr. Necesitaba alquilar mi propiedad rápidamente, y gracias a la plataforma encontré al inquilino perfecto en pocos días. El proceso fue sencillo y ágil; en menos de lo que esperaba ya tenía todo coordinado. Definitivamente, Reffindr se ha convertido en mi recurso de confianza para encontrar inquilinos de manera rápida y eficiente. ¡Lo recomiendo sin dudar!',
      avatar: {
        image: 'public/AvatarImage1.png',
      },
      userName: 'Lautaro Fazzito',
      userRole: 'Propietario',
    },
    {
      description:
        'Reffindr superó mis expectativas. Encontré un inquilino confiable y comprometido en menos de una semana. Todo el proceso fue transparente y sencillo. ¡Gracias por esta increíble herramienta!',
      avatar: {
        image: 'public/AvatarImage2.png',
      },
      userName: 'María José López',
      userRole: 'Propietaria',
    },
    {
      description:
        'Soy dueño de varias propiedades y Reffindr se ha convertido en mi aliado número uno para alquilarlas. El soporte al cliente es excepcional y el sistema muy intuitivo. Lo recomiendo 100%.',
      avatar: {
        image: 'public/AvatarImage1.png',
      },
      userName: 'Carlos Ramírez',
      userRole: 'Inversionista',
    },
    {
      description:
        'La experiencia con Reffindr ha sido increíble. La plataforma me ayudó a encontrar al inquilino ideal para mi departamento en tiempo récord. Es fácil de usar y muy eficiente.',
      avatar: {
        image: 'public/AvatarImage4.png',
       
      },
      userName: 'Andrea Núñez',
      userRole: 'Propietaria',
    },
    {
      description:
        'Nunca pensé que alquilar una propiedad podría ser tan sencillo. Gracias a Reffindr, tengo más tiempo para dedicar a otras actividades porque encontré al inquilino perfecto rápidamente.',
      avatar: {
        image: 'public/AvatarImage1.png',
      },
      userName: 'Luis Mendoza',
      userRole: 'Empresario',
    },
  ]

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex: number) => (prevIndex + 1) % users.length)
  //   }, 4000)

  //   return () => clearInterval(interval)
  // }, [users.length])

  const  handlePrev = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1)) 
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % users.length)
  }

  return (
    <Flex ml={'20rem'} border={'none'}>
      <Flex gap='2' flexDir={'column'}>
        <Text fontSize={48} fontWeight={'bold'}>
          Más de 140 mil personas eligen{''} <Text color={'#146EB4'}>Reffindr</Text>
        </Text>
        <Text fontSize={32}>
          Nuestros clientes nos eligen por la transparencia y simplicidad en el proceso de alquiler.{' '}
        </Text>
        <Flex justifyContent='flex-start'>
        <Button background={'#146EB4'} borderRadius={'full'} onClick={handlePrev}>
          <MdKeyboardArrowLeft />
        </Button>
        <Button background={'#146EB4'} borderRadius={'full'} onClick={handleNext}>
          <MdKeyboardArrowRight />
        </Button>
      </Flex>
      </Flex>


      <Flex
        overflow="hidden"
        position="relative"
        width="100%"
        maxWidth="1000px"
        mx="auto"
      >
        <Flex
          transform={`translateX(-${currentIndex * 15}%)`}
          transition="transform 0.5s ease-in-out"
          width={`${users.length * 100}%`}
          gap={'2'}
        >
          {users.map((user, index) => (
            <Box key={index} flex="none" width='max-content'>
              <CardCarrusel
                description={user.description}
                avatar={user.avatar.image}
                userName={user.userName}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}