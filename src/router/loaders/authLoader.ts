import { redirect } from 'react-router-dom'

import { AUTH_TOKEN_KEY } from '@/constants/auth-account-constants'
import { authStore } from '@/stores/authStore'

export const requireAuth = () => {
  const token = sessionStorage.getItem(AUTH_TOKEN_KEY)

  if (!token) return redirect('/inquilinos')
  authStore.setState({ token: token })
  return null
}

export const authenticated = () => {
  const token = sessionStorage.getItem(AUTH_TOKEN_KEY)
  console.log(token)

  if (token) {
    authStore.setState({ token: token })
    return redirect('/home')
  }

  return null
}
