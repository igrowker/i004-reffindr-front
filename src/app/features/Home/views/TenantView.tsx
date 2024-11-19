import { IoLogoInstagram } from 'react-icons/io5'

import { HeadSection, LastSection } from '@/app/features/Home/components/'
import { CardStaticCarrusel } from '@/app/UI/components/CarruselLanding/CardStaticCarrusel'

import { SectionGrid } from '../components/sections/SectionGrid'
import Footer from '@/app/UI/components/footer/Footer'

export const TenantView = () => {
  return (
    <>
      <HeadSection
        headLink={{
          title: 'Soy propietario',
          path: '/owner',
        }}
        backgroundImage='/landing-inquilinos-head.png'
        headIcon={<IoLogoInstagram size={32} />}
        title='Encontrá tu hogar sin &#10; intermediarios'
      />

      <SectionGrid />

      <CardStaticCarrusel />

      <LastSection
        img={'/Pexels_Photo_by_Kindel_Media.png'}
        items={[
          {
            title: 'Mirá el catalogo de las propiedades',
            description: 'Una vez completado el formulario, se mostrarán los hogares a los que aplica tu perfil',
          },
          {
            title: 'Postulate a las propiedades que más te gusten',
            description:
              'Si cumpliste los requisitos, te seleccionará el inquilino saliente entre los mejores candidatos',
          },
          {
            title: 'Fuiste seleccionado por el inquilino',
            description: 'Te podrás conectar con el propietario para concretar tu alquiler o venta de tu nuevo hogar. ',
          },
        ]}
      />
      <Footer/>
    </>
  )
}
