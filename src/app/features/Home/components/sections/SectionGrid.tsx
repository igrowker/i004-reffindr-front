import { Box, Center, Image, SimpleGrid, Text } from '@chakra-ui/react'

import image2 from '@/assets/llaveshogar.png'
import image1 from '@/assets/parejamudanza.png'
import image3 from '@/assets/primerhoragar.jpg'

import { HeaderSectionGridComponent } from './HeaderSectionGridComponent'

export const SectionGrid = () => {
  return (
    <Box bg='white' py={12} px={6}>
      <HeaderSectionGridComponent
        title='Los mejores valorados aplicarán a tu propiedad'
        highlight='valorados'
        description='Te mostraremos los mejores tres candidatos aplicados a tu propiedad, siendo pre-filtrados anteriormente.'
      />
      <Center>
        <Box
          p={4}
          position={{ base: 'static', md: 'relative' }}
          w={{ base: 'full', md: '870px' }}
          h={{ base: 'auto', md: '520px' }}
          top={{ md: 10 }}
        >
          <SimpleGrid columns={{ base: 2, md: 1 }} gap={{ base: 4, md: 0 }}>
            <Box
              position={{ md: 'absolute' }}
              top={{ md: '40px' }}
              left={{ md: '0' }}
              w={{ base: 'full', md: '300px' }}
              zIndex={2}
            >
              <Box bg='transparent' rounded='lg' overflow='hidden' shadow='lg' h={{ base: '150px', md: '200px' }}>
                <Image src={image1} alt='celebrando mudanza' objectFit='cover' w='full' h='full' />
              </Box>
            </Box>

            <Box
              position={{ md: 'absolute' }}
              top={{ md: '-3' }}
              left={{ md: '310px' }}
              w={{ base: 'full', md: '200px' }}
              zIndex={1}
            >
              <Box bg='#EDF2F7' rounded='lg' shadow='md' p={6} h={{ base: '155px', md: '250px' }}>
                <Box display='flex' flexDirection='column' justifyContent='flex-end' h='full'>
                  <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight='bold'>
                    95%
                  </Text>
                  <Text color='gray.600' textAlign='left'>
                    de satisfacción con nuestro servicio
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box
              position={{ md: 'absolute' }}
              top={{ md: '60px' }}
              left={{ md: '520px' }}
              w={{ base: 'full', md: '140px' }}
              zIndex={2}
            >
              <Box bg='white' rounded='lg' overflow='hidden' shadow='md' h={{ base: '150px', md: '220px' }}>
                <Image src={image2} alt='Keys' objectFit='cover' w='full' h='full' />
              </Box>
            </Box>

            <Box
              position={{ md: 'absolute' }}
              top={{ md: '-8' }}
              left={{ md: '670px' }}
              w={{ base: 'full', md: '200px' }}
              zIndex={1}
            >
              <Box bg='#3182CE' rounded='lg' shadow='md' p={6} h={{ base: '200px', md: '200px' }}>
                <Box display='flex' flexDirection='column' justifyContent='flex-end' alignItems='center' h='full'>
                  <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight='bold' color='white'>
                    23 Años
                  </Text>
                  <Text color='white' textAlign='center'>
                    de experiencia en el mercado
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box
              position={{ md: 'absolute' }}
              top={{ md: '250px' }}
              left={{ md: '100' }}
              w={{ base: 'full', md: '300px' }}
              zIndex={2}
            >
              <Box bg='#3182CE' rounded='lg' shadow='md' p={6} color='white' h={{ base: '150px', md: '200px' }}>
                <Box display='flex' flexDirection='column' justifyContent='flex-end' h='full'>
                  <Text fontSize='3xl' fontWeight='bold'>
                    +1000
                  </Text>
                  <Text>Propiedades alquiladas</Text>
                </Box>
              </Box>
            </Box>

            <Box
              position={{ md: 'absolute' }}
              top={{ md: '250px' }}
              left={{ md: '325px' }}
              w={{ base: 'full', md: '185px' }}
              zIndex={1}
            >
              <Box bg='white' rounded='lg' overflow='hidden' shadow='md' h={{ base: '150px', md: '250px' }}>
                <Image src={image3} alt='Agent' objectFit='cover' w='full' h='full' />
              </Box>
            </Box>

            <Box
              position={{ md: 'absolute' }}
              top={{ md: '290px' }}
              left={{ md: '520px' }}
              w={{ base: 'full', md: '140px' }}
              zIndex={2}
            >
              <Box bg='gray.900' rounded='lg' shadow='md' p={6} color='white' h={{ base: '150px', md: '230px' }}>
                <Box display='flex' flexDirection='column' justifyContent='flex-end' alignItems='center' h='full'>
                  <Text fontSize='3xl' fontWeight='bold'>
                    24hr
                  </Text>
                  <Text textAlign='center'>Atención al cliente disponible</Text>
                </Box>
              </Box>
            </Box>

            <Box
              position={{ md: 'absolute' }}
              top={{ md: '180px' }}
              left={{ md: '670px' }}
              w={{ base: 'full', md: '200px' }}
              zIndex={1}
            >
              <Box bg='#EDF2F7' rounded='lg' shadow='md' p={6} h={{ base: '150px', md: '200px' }}>
                <Box display='flex' flexDirection='column' justifyContent='flex-end' h='full'>
                  <Text fontSize='3xl' fontWeight='bold'>
                    +15.000
                  </Text>
                  <Text color='gray.600' textAlign='left'>
                    usuarios registrados
                  </Text>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Center>
    </Box>
  )
}
