import { useState } from 'react'

import { authLogin } from '@/services/authService'

export const useLogin = () => {
  const [errors, setErrors] = useState<string[] | null>(null)

  const login = async (email: string, password: string) => {
    const response = await authLogin(email, password)

    if (response.hasErrors) {
      setErrors(response.errors)
      console.log('Errors:', response.errors)
      return
    }
    setErrors(null)
    sessionStorage.setItem('token', response.data?.token!)
    console.log('Token:', response.data?.token)
  }

  return { login, errors }
}
