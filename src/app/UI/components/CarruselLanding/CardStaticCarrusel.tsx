import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'

import { CardCarrusel } from './CardCarrusel'

export const CardStaticCarrusel = () => {
  const { t } = useTranslation()

  const [currentIndex, setCurrentIndex] = useState(0)

  const users = [
    {
      description: t('landing.card-static-carrusel.array-user.description-1'),
      avatar: {
        image: 'public/AvatarImage1.png',
      },
      userName: t('landing.card-static-carrusel.array-user.name-1'),
      userRole: t('landing.card-static-carrusel.array-user.role-1'),
    },
    {
      description: t('landing.card-static-carrusel.array-user.description-2'),
      avatar: {
        image: 'public/AvatarImage2.png',
      },
      userName: t('landing.card-static-carrusel.array-user.name-2'),
      userRole: t('landing.card-static-carrusel.array-user.role-2'),
    },
    {
      description: t('landing.card-static-carrusel.array-user.description-3'),
      avatar: {
        image: 'public/AvatarImage1.png',
      },
      userName: t('landing.card-static-carrusel.array-user.name-3'),
      userRole: t('landing.card-static-carrusel.array-user.role-3'),
    },
    {
      description: t('landing.card-static-carrusel.array-user.description-4'),
      avatar: {
        image: 'public/AvatarImage4.png',
      },
      userName: t('landing.card-static-carrusel.array-user.name-4'),
      userRole: t('landing.card-static-carrusel.array-user.role-4'),
    },
    {
      description: t('landing.card-static-carrusel.array-user.description-5'),
      avatar: {
        image: 'public/AvatarImage1.png',
      },
      userName: t('landing.card-static-carrusel.array-user.name-5'),
      userRole: t('landing.card-static-carrusel.array-user.role-5'),
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1))
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % users.length)
  }

  return (
    <Flex
      pl={{ base: '0', md: '20px' }}
      pr={'17px'}
      mx={{ base: '0', md: '10' }}
      border={'none'}
      alignItems={'center'}
      flexDirection={{ base: 'column', md: 'column', xl: 'row' }}
      justifyContent={'space-around'}
    >
      <Flex gap='2' flexDir={'column'}>
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={{ base: 'center', md: 'flex-start' }}
          p={4}
          flexWrap={'wrap'}
        >
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight={'bold'} textAlign={{ base: 'center', md: 'left' }}>
            {t('landing.card-static-carrusel.title')}
            <Text as='span' color={'#146EB4'}>
            {t('landing.card-static-carrusel.title-2')}
            </Text>
          </Text>
          <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={{ base: 'center', md: 'left' }}>
          {t('landing.card-static-carrusel.description')}
          </Text>
        </Flex>
        <Flex justifyContent='flex-end' p={5} gap={5}>
          <Button background={'#146EB4'} borderRadius={'full'} onClick={handlePrev}>
            <MdKeyboardArrowLeft />
          </Button>
          <Button background={'#146EB4'} borderRadius={'full'} onClick={handleNext}>
            <MdKeyboardArrowRight />
          </Button>
        </Flex>
      </Flex>

      <Flex
        overflow='hidden'
        position='relative'
        width='100%'
        maxWidth='70rem'
        mx='auto'
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Flex
          transform={{
            base: `translateX(-${currentIndex * 99}%)`,
            md: `translateX(-${currentIndex * 21}%)`,
            lg: `translateX(-${currentIndex * 19}%)`,
            xl: `translateX(-${currentIndex * 15}%)`,
          }}
          transition='transform 0.5s ease-in-out'
        >
          {users.map((user, index) => (
            <Box p={3} key={index} flex='none' width={{ base: '100%', md: 'max-content' }}>
              <CardCarrusel
                description={user.description}
                avatar={user.avatar.image}
                userName={user.userName}
                userRole={user.userRole}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
