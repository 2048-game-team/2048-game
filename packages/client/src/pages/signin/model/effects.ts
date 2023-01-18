import { createEffect } from 'effector'
import { SignInRequest } from 'shared/api/swagger'
import { Auth } from 'entities/ui'
import { AxiosError } from 'axios'
import { practicumApi } from 'shared/api/api'

export const signinFx = createEffect<SignInRequest, Auth, AxiosError>(
  async signInRequest => {
    await practicumApi.auth.signinCreate(signInRequest)
    return Auth.On
  }
)
