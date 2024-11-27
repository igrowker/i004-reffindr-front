import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { authLogin } from '@/services/authService'
import { authRegister } from '@/services/authService'

export const useLogin = () => {
  const [errorsMessage, setErrorsMessage] = useState<string[] | null>(null)
  const navigate = useNavigate()

  const login = async (email: string, password: string) => {
    const response = await authLogin(email, password)
    navigate('/')

    if (response.hasErrors) {
      setErrorsMessage(response.errors)
      console.log('Errors:', response.errors)
      return
    }
    setErrorsMessage(null)
    sessionStorage.setItem('token', response.data?.token!)
    console.log('Token:', response.data?.token)
  }

  useEffect(() => {
    if (errorsMessage) {
      const timer = setTimeout(() => {
        setErrorsMessage(null)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [errorsMessage])

  return { login, errorsMessage }
}

export const useRegister = () => {
  const [errorsMessage, setErrorsMessage] = useState<string[] | null>(null)

  const register = async (roleId: number, name: string, lastName: string, email: string, password: string) => {
    const response = await authRegister(roleId, name, lastName, email, password)

    if (response.hasErrors) {
      setErrorsMessage(response.errors)
      console.log('Errors:', response.errors)
      return
    }
    setErrorsMessage(null)
    sessionStorage.setItem('token', response.data?.token!)
    console.log('Token:', response.data?.token)
  }

  useEffect(() => {
    if (errorsMessage) {
      const timer = setTimeout(() => {
        setErrorsMessage(null)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [errorsMessage])

  return { register, errorsMessage }
}
