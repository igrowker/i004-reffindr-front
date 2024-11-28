import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SESSION_STORAGE_AUTH_TOKEN } from '@/constants/auth-constants'
import { authLogin } from '@/services/authService'
import { authRegister } from '@/services/authService'
import { authStore } from '@/stores/authStore'

interface RegisterData {
  roleId: number
  name: string
  lastName: string
  email: string
  password: string
}

export const useLogin = () => {
  const [errorsMessage, setErrorsMessage] = useState<string[] | null>(null)
  const navigate = useNavigate()
  const setToken = authStore((state) => state.setToken)

  const login = async (email: string, password: string) => {
    const response = await authLogin(email, password)

    if (response.hasErrors) {
      setErrorsMessage(response.errors)
      console.log('Errors:', response.errors)
      return
    }
    setErrorsMessage(null)
    const token = response.data?.token
    if (token) {
      sessionStorage.setItem(SESSION_STORAGE_AUTH_TOKEN, token)
      setToken(token)
      navigate('/home')
    } else {
      console.error('Token is undefined')
    }
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

  const register = async ({ roleId, name, lastName, email, password }: RegisterData) => {
    const response = await authRegister(roleId, name, lastName, email, password)

    if (response.hasErrors) {
      setErrorsMessage(response.errors)
      console.log('Errors:', response.errors)
      return true
    }
    setErrorsMessage(null)

    const token = response.data?.token as string
    sessionStorage.setItem('token', token)
    return null
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
