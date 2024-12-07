import { redirect } from 'react-router-dom'

import { AUTH_TOKEN_KEY } from '@/constants/auth-account-constants'
import { authStore } from '@/stores/authStore'
import { userStore } from '@/stores/userStore'

export const requireAuth = async () => {
  const token = sessionStorage.getItem(AUTH_TOKEN_KEY)

  if (!token) return redirect('/inquilinos')

  const getActualUser = userStore.getState().getActualUser
  const actualUser = userStore.getState().user
  if ( actualUser == null ) getActualUser();
  authStore.setState({ token: token })

  return null
}

export const authenticated = () => {
  const token = sessionStorage.getItem(AUTH_TOKEN_KEY)
  if (token) {
    authStore.setState({ token: token })
    return redirect('/home')
  }

  return null
}
