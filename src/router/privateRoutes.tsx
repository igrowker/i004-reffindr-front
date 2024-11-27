import { Navigate } from 'react-router-dom'

const isAuthenticated = () => {
  return sessionStorage.getItem('token') !== null
}

export const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to='/inquilinos' />
}

export const PublicRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? <Navigate to='/home' /> : element
}
