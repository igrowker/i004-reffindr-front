import { Box, Center, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { HeaderSectionGridComponent } from './HeaderSectionGridComponent'

export const SectionGrid = () => {
  const { t } = useTranslation()

  return (
    <Box bg='white' py={12} px={6} mb={10}>
      <HeaderSectionGridComponent
        title={t('landing.section-grid.header-title')}
        highlight='valorados'
        description={t('landing.section-grid.header-description')}
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
                <Image src='assets/parejamudanza.png' alt='celebrando mudanza' objectFit='cover' w='full' h='full' />
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
                    {t('landing.section-grid.box1-description')}
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
                <Image src='assets/llaveshogar.png' alt='Keys' objectFit='cover' w='full' h='full' />
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
                    {t('landing.section-grid.box2-title')}
                  </Text>
                  <Text color='white' textAlign='center'>
                    {t('landing.section-grid.box2-description')}
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
                    {t('landing.section-grid.box3-title')}
                  </Text>
                  <Text>{t('landing.section-grid.box3-description')}</Text>
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
                <Image src='assets/primerhoragar.jpg' alt='Agent' objectFit='cover' w='full' h='full' />
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
                    {t('landing.section-grid.box4-title')}
                  </Text>
                  <Text textAlign='center'>{t('landing.section-grid.box4-description')}</Text>
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
                    {t('landing.section-grid.box5-title')}
                  </Text>
                  <Text color='gray.600' textAlign='left'>
                    {t('landing.section-grid.box5-description')}
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
