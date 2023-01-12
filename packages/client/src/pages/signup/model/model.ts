import { createEvent } from 'effector'
import { SignUpRequest } from 'shared/api/swagger'

export const createNewUser = createEvent<SignUpRequest>()
