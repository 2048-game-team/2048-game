import { createEffect } from 'effector'
import { Auth } from 'entities/ui'
import { AxiosError } from 'axios'
import { practicumApi } from 'shared/api/api'

export const logoutFx = createEffect<void, Auth, AxiosError>(async () => {
  await practicumApi.auth.logoutCreate()
  return Auth.Off
})
