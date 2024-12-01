import { Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'

import { Details } from '../ViewExpandedDetails/Details'
import { ImgGrid } from '../ViewExpandedDetails/ImgGrid'
import { LookingFor } from '../ViewExpandedDetails/LookingFor'
import { Modal } from '../ViewExpandedDetails/Modal'
import { Requirements } from '../ViewExpandedDetails/Requirements '

const images = [
  'assets/imgcandidatos/portadapareja.jpg',
  'assets/imgcandidatos/pareja1.jpg',
  'assets/imgcandidatos/pareja2.jpg',
  'assets/imgcandidatos/pareja3.jpg',
  'assets/imgcandidatos/pareja4.jpg',
]

const data = [
  {
    id: 1,
    title: 'Pareja Viajera y Feliz',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    budget: 480,
    location: 'Recoleta, C.A.B.A',
    features: ['3 amb', '48 meses', 'Mascota'],
    rating: 4.5,
  },
]

export const TenantCandidateDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const currentItem = data[0]
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
            title={currentItem.title}
            description={currentItem.description}
            price={currentItem.budget}
            location={currentItem.location}
            features={currentItem.features}
            rating={currentItem.rating}
            showRating={true}
          />
          <LookingFor />
          <Requirements />
          <Flex justifyContent='center' alignItems='center' mt='4' w='full' gap='8'>
            <Button
              onClick={() => {
                console.log('Rechazar')
              }}
              size='lg'
              bg='white'
              color='black'
              border='solid 1px gray'
              _hover={{ bg: 'red.600', color: 'white' }}
              w='200px'
            >
              Rechazar
            </Button>
            <Button
              onClick={() => {
                setIsModalOpen(true)
              }}
              size='lg'
              bg='#1E3A8A'
              w='200px'
            >
              Aceptar Candidatura
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Modal
        title='Enviar candidatos'
        body={
          <>
            ¿Confirmas que deseas enviar este candidato al propietario?
            <br />
            Recuerda que solo puedes enviar hasta 3 candidatos, y una vez enviados no podrás hacer cambios.
          </>
        }
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
