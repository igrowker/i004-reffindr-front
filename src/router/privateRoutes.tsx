import { SESSION_STORAGE_AUTH_TOKEN } from '@/constants/auth-constants'
import { Navigate } from 'react-router-dom'

const isAuthenticated = () => {
  return sessionStorage.getItem(SESSION_STORAGE_AUTH_TOKEN) !== null
}

export const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to='/inquilinos' />
}

export const PublicRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? <Navigate to='/home' /> : element
}
