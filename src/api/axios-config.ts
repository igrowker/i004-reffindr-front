import axios, { InternalAxiosRequestConfig } from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://i004-reffindr-back-nodejs-dev.onrender.com',
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
