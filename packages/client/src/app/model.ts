import { createEvent, restore } from 'effector';
import { IEnvData } from './types';

export const setEnvData = createEvent<IEnvData>();
export const $envData = restore(setEnvData, {
  baseUrl: '',
  yandexOauthUrl: '',
  yandexOauthRedirectUri: '',
  serverUrl: '',
});
