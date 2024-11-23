import { authRegister } from '@/services/authService'

export const useRegister = () => {
  const register = async (roleId: number, name: string, lastName: string, email: string, password: string) => {
    const response = await authRegister(roleId, name, lastName, email, password)

    console.log(response)
  }
  return { register }
}
