import { Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Details } from './Details'
import { ImgGrid } from './ImgGrid'
import { LookingFor } from './LookingFor'
import { Modal } from './Modal'
import { Requirements } from './Requirements '

const images = ['assets/hogar1.png', 'assets/hogar2.png', 'assets/hogar3.png', 'assets/hogar4.png', 'assets/hogar5.png']

export const ExpandedDetails = () => {
  const { state } = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Flex bg='#EDF2F7' p='2' w='full' h='100vh' flexDirection='column'>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='start'
          bg='white'
          p='5'
          gap='4'
          border='1px solid'
          borderColor='gray.300'
          borderRadius='md'
        >
          <ImgGrid images={images} />
          <Details
            title={state.title}
            description={state.description}
            price={state.price}
            location={state.location}
            features={state.features}
          />
          <LookingFor />
          <Requirements />
          <Flex justifyContent='center' alignItems='center' mt='4' w='full'>
            <Button
              onClick={() => {
                setIsModalOpen(true)
              }}
              size='lg'
              bg='#1E3A8A'
              px='10'
            >
              Aplicar
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Modal
        title='Aplicar a propiedad'
        body='¿Confirmas que deseas aplicar a esta propiedad?'
        onConfirm={() => {
          alert('Aplicado')
          setIsModalOpen(false)
        }}
        onCancel={() => {
          setIsModalOpen(false)
        }}
        onClose={() => {
          setIsModalOpen(false)
        }}
        open={isModalOpen}
      />
    </>
  )
}
