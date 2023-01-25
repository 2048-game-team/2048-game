import { createEvent } from 'effector';
import { SignInRequest } from 'shared/api/swagger';

export const signin = createEvent<SignInRequest>();
