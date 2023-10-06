import { api, secret } from '@/api/api'
import { AxiosError } from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { toast } from 'react-toastify'

import { destroyCookie, parseCookies, setCookie } from 'nookies'

interface LoginProps {
  email: string
  password: string
}

interface RegistrarProps {
  name: string
  cpf: string
  password: string
  age: string
  email: string
}

export const auth = {
  login: async (data: LoginProps) => {
    try {
      const response = await api.post('/auth/employee', data)

      const { token } = response.data

      setCookie(undefined, secret, token, {
        maxAge: 60 * 60 * 24,
        path: '/',
      })

      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error(error.response.data.message)
        }
        if (error.response?.status === 500) {
          toast.error('Internal server error')
        }
      }
    }
  },
  register: async (data: RegistrarProps) => {
    try {
      const response = await api.post('/employees', data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          toast.error(error.response.data.message)
        }

        if (error.response?.status === 500) {
          toast.error('Internal server error')
        }
      }
    }
  },
  logOut: (router: AppRouterInstance) => {
    const token = parseCookies()

    if (token[secret]) {
      destroyCookie(undefined, secret)
      router.push('/')
    }

    router.push('/')
  },
}
