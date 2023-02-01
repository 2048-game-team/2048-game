import { createEvent } from 'effector';
import { SignInRequest, YandexServiceIdListParams } from 'shared/api/swagger';

export const signin = createEvent<SignInRequest>();

export const oauthGetServiceId = createEvent<YandexServiceIdListParams>();
