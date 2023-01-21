import { Api } from './swagger';
import { AxiosError } from 'axios';
import { logout } from 'pages/logout/model';
import { setMessage } from 'entities/notification/model';
import { codeErrors } from 'shared/api/codeErrors';

export const practicumApi = new Api({
  baseURL: `https://ya-praktikum.tech/api/v2`,
  timeout: 10000,
  withCredentials: true,
});

practicumApi.instance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response?.status !== 200) {
      if (error.response?.status === 401) {
        logout();
      } else if (error.response?.status) {
        const code = error.response.status;
        const message = codeErrors(code);
        setMessage({
          type: 'error',
          message,
        });
      }
    }
    return Promise.reject(error);
  }
);
