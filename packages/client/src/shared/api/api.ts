import { Api } from './swagger';
import { baseURL } from 'shared/api/consts';

export const practicumApi = new Api({
  baseURL,
  timeout: 10000,
  withCredentials: true,
});
