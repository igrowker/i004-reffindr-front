import { Navigate } from 'react-router-dom'

import { AUTH_TOKEN_KEY } from '@/constants/auth-account-constants'

const isAuthenticated = () => {
  return sessionStorage.getItem(AUTH_TOKEN_KEY) !== null
}

export const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to='/inquilinos' />
}

export const PublicRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? <Navigate to='/home' /> : element
}

export const PublicRouteProfile = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? <Navigate to='/profile' /> : element
}
