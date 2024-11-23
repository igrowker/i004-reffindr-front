import { authLogin } from '@/services/authService'

export const useLogin = () => {
  const login = async (email: string, password: string) => {
    try {
      const token = await authLogin(email, password)
      sessionStorage.setItem('token', token)
      console.log('Token:', token)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  return { login }
}
