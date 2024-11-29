import axios, { InternalAxiosRequestConfig } from 'axios'

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.url === '/') return config
  const tokenInfo = sessionStorage.getItem('token')

  config.headers.Authorization = `Bearer ${tokenInfo}`

  return config
}

httpClient.interceptors.request.use(requestInterceptor)
