import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { IUser } from '@/interfaces/user'
import { IErrorMessage } from '@/interfaces/api'
import { useSnackbar } from '@/composables/useSnackbar'
import { useApi } from '@/composables/useApi'

export const api = axios.create({
  baseURL: process.env.VITE_BASE_URL
})

const snackbar = useSnackbar()
const { errorMessage } = useApi()

const headersWithBearer = (request: AxiosRequestConfig<any>, user: IUser) => {
  return request.headers = {
    Authorization: `Bearer ${user.token}`,
    'Content-Type': 'application/json'
  }
}

api.interceptors.request.use((request) => {
  const user: IUser = JSON.parse(localStorage.getItem('user') || '{}')

  if (user?.token) headersWithBearer(request, user)

  return request
})

api.interceptors.response.use(response => {
 
  if (response?.status === 204) {
    const statusError = errorMessage[response.status as keyof IErrorMessage] 
    snackbar.error(statusError)
  }

  return response
}, (error: AxiosError) => {

  if (error.response?.status) {
    const statusError = errorMessage[error.response.status as keyof IErrorMessage] 
    snackbar.error(statusError)
  }
})