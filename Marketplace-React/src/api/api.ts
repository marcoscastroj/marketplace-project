import axios from 'axios'

export const secret = '@jwt_secret'

const baseURL = 'http://localhost:3003'

export const api = axios.create({
  baseURL,
})
