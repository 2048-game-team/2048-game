import { createEffect, merge, restore } from 'effector'
import { UserResponse, SignInRequest } from 'shared/api/swagger'
import { AxiosError } from 'axios'
import { practicumApi } from 'shared/api/api'
import { Auth } from 'entities/ui'

export const getUserFx = createEffect<number, UserResponse, AxiosError>(
  async id => {
    const res = await practicumApi.user.userDetail(id)
    return res.data
  }
)

export const loginFx = createEffect<SignInRequest, Auth, AxiosError>(
  async signInRequest => {
    await practicumApi.auth.signinCreate(signInRequest)
    return Auth.On
  }
)

export const logoutFx = createEffect<void, Auth, AxiosError>(async () => {
  await practicumApi.auth.logoutCreate()
  return Auth.Off
})

export const authFx = merge<Auth>([loginFx.doneData, logoutFx.doneData])
export const $auth = restore(authFx, Auth.Off)
$auth.watch(state => console.log('Auth state: ', state))
