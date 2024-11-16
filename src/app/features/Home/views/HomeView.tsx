import { HeadSection } from "@/app/UI/components/head-section/HeadSection"
import { IoLogoInstagram } from 'react-icons/io5';

export const HomeView = () => {
  return (
    <>
      <HeadSection
        backgroundImage="/landing-inquilinos-head.png"
        headIcon={<IoLogoInstagram  size={32}/>}
        title="Encontrá tu hogar sin &#10; intermediarios"
      />
    </>
  )

}
