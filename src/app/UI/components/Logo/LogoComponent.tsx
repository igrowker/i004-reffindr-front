import { Image } from '@chakra-ui/react'

interface LogoComponentProps {
  src: string
  size?: string
}
export const LogoComponent = ({ src, size = '100px' }: LogoComponentProps) => (
  <Image src={src} w={size} h={size} alt='Logo' />
)
