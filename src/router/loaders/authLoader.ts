import { redirect } from 'react-router-dom'

import { SESSION_STORAGE_AUTH_TOKEN } from '@/constants/auth-constants'

export const requireAuth = () => {
  const token = sessionStorage.getItem(SESSION_STORAGE_AUTH_TOKEN)

  if (!token) return redirect('/inquilinos')

  return null
}

export const authenticated = () => {
  const token = sessionStorage.getItem(SESSION_STORAGE_AUTH_TOKEN)
  console.log(token)

  if (token) return redirect('/home')

  return null
}
