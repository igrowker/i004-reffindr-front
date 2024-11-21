import { IoLogoInstagram } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { HeadSection, LastSection } from '@/app/features/Home/components/'
import { CardStaticCarrusel } from '@/app/UI/components/CarruselLanding/CardStaticCarrusel'

import { SectionGrid } from '../components/sections/SectionGrid'
import Footer from '@/app/UI/components/footer/Footer'

export const TenantView = () => {
  const { t } = useTranslation()

  return (
    <>
      <HeadSection
        headLink={{
          title: t('landing.tenant-view.HeadSection.owner'),
          path: '/owner',
        }}
        backgroundImage='/landing-inquilinos-head.png'
        headIcon={<IoLogoInstagram size={32} />}
        title={t('landing.tenant-view.HeadSection.title')}
      />

      <SectionGrid />

      <CardStaticCarrusel />

      <LastSection
        img={'/Pexels_Photo_by_Kindel_Media.png'}
        items={[
          {
            title: t('landing.tenant-view.last-section.title-1'),
            description: t('landing.tenant-view.last-section.description-1')
          },
          {
            title: t('landing.tenant-view.last-section.title-2'),
            description: t('landing.tenant-view.last-section.description-2')
          },
          {
            title: t('landing.tenant-view.last-section.title-3'),
            description: t('landing.tenant-view.last-section.description-3')
          },
        ]}
      />
      <Footer/>
    </>
  )
}
