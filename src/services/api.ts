import axios, { AxiosInstance, AxiosError } from 'axios'

interface ApiError {
  message: string
  status: number
  data?: unknown
}

const createApiClient = (): AxiosInstance => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 10000,
  })

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('auth_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('auth_token')
        window.location.href = '/login'
      }

      const apiError: ApiError = {
        message: error.message,
        status: error.response?.status || 500,
        data: error.response?.data,
      }

      return Promise.reject(apiError)
    }
  )

  return api
}

export const apiClient = createApiClient()
