import { Api } from './swagger'

export const practicumApi = new Api({
  baseURL: `https://ya-praktikum.tech/api/v2`,
  timeout: 10000,
})
