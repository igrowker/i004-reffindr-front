import { useTranslation } from 'react-i18next'
import { IoLogoInstagram } from 'react-icons/io5'

import { HeadSection, LastSection } from '@/app/features/Home/components/'
import { CardStaticCarrusel } from '@/app/UI/components/CarruselLanding/CardStaticCarrusel'

import { SectionGrid } from '../components/sections/SectionGrid'
import { Footer } from '@/app/UI/components/Footer/Footer'

export const OwnerLanding = () => {
  const { t } = useTranslation()

  return (
    <>
      <HeadSection
        headLink={{
          title: t('landing.owner-view.HeadSection.tenant'),
          path: '/inquilinos',
        }}
        backgroundImage='/Iniciar_propietario.jpg'
        headIcon={<IoLogoInstagram size={32} />}
        title={t('landing.owner-view.HeadSection.title')}
      />

      <SectionGrid />

      <CardStaticCarrusel />

      <LastSection
        img={'/owner-lastsection.png'}
        items={[
          {
            title: t('Mira el catálogo de los inquilinos preseleccionados.'),
            description: t(
              'El inquilino saliente de tu propied habrá preseleccionado 3 candidatos que cumplan con los requisitos de la propiedad'
            ),
          },
          {
            title: t('Seleccioná el próximo inquilino posible.'),
            description: t(
              'Vas a poder elegir uno de los candidatos a inquilinos que más convicciones tengan para tu propiedad.'
            ),
          },
          {
            title: t('Contacta tu candidato.'),
            description: t(
              'Una vez que allas elegido a tu candidato preferido tendrás que contactarte con él para poder finalizar el proceso.'
            ),
          },
        ]}
      />
      <Footer />
    </>
  )
}
