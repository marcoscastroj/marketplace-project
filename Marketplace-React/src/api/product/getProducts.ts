import { api } from '@/api/api'

export interface GetProducts {
  _id: string
  name: string
  price: number
  promotionPrice: number
  validity: string
  code: string
}

export const getProducts = async (token: string) => {
  try {
    const response = await api.get<GetProducts[]>('/products/all', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data ? response.data : []
  } catch (error) {}
}
