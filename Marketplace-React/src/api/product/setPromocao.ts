import { AxiosError } from 'axios'
import { api } from '../api'
import { toast } from 'react-toastify'

export const setPromotion = async (
  code: string,
  promotionPrice: number,
  token: string,
) => {
  try {
    await api.put(
      `/products/${code}`,
      { promotionPrice },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
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
