import axios, { AxiosError } from 'axios'
import { useSnackbar } from '@/composables/useSnackbar'
import { useApi } from '@/composables/useApi'
import { IErrorMessage } from '@/interfaces/api'

export const api = axios.create({
  baseURL: process.env.VITE_AUTHENTICATION_BASE_URL
})

api.interceptors.request.use((request) => {
  request.headers = {
    'Content-Type': 'multipart/form-data'
  }

  return request
})

api.interceptors.response.use(response => {
  return response
}, (error: AxiosError) => {
  const snackbar = useSnackbar()

  const { errorMessage } = useApi()

  if (error.response?.status) {
    const statusError = errorMessage[error.response.status as keyof IErrorMessage] 
    snackbar.error(statusError)
  }

  // Deixa a própria chamada a api tratar o erro
  return Promise.reject(error)
})
