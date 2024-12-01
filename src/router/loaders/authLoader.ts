import { redirect } from 'react-router-dom'

import { AUTH_TOKEN_KEY } from '@/constants/auth-account-constants'

export const requireAuth = () => {
  const token = sessionStorage.getItem(AUTH_TOKEN_KEY)

  if (!token) return redirect('/inquilinos')

  return null
}

export const authenticated = () => {
  const token = sessionStorage.getItem(AUTH_TOKEN_KEY)
  console.log(token)

  if (token) return redirect('/home')

  return null
}
