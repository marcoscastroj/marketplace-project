import { AxiosError } from 'axios'
import { api } from '../api'

import { toast } from 'react-toastify'

export const deleteProduct = async (code: string, token: string) => {
  try {
    await api.delete(`/products/${code}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        toast.error(error.response.data.message)
      }

      if (error.response?.status === 500) {
        toast.error(error.response.data.message)
      }
    }
  }
}
