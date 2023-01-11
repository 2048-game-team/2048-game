import { Api } from './swagger'

export const practicumApi = new Api({
  baseURL: `${origin}/api/v2`,
  timeout: 10000,
})
