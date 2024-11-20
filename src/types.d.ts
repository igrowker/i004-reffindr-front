export type onProps = {
  onclose?: () => void
  onShowRegister?: () => void
  onShowLogin?: () => void
}

export type CardHorizontalProps = {
  title: string
  price: string
  location: string
  badges: string[]
  description: string
}
