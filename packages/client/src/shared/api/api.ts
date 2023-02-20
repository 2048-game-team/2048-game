import { Api } from './swagger';
import { AxiosError } from 'axios';
import { logout } from 'pages/logout/model';
import { setMessage } from 'entities/notification/model';
import { codeErrors } from 'shared/api/codeErrors';
import { baseURL } from 'shared/api/consts';
import { useEvent } from 'effector-react/ssr';

export const practicumApi = new Api({
  baseURL,
  timeout: 10000,
  withCredentials: true,
});

practicumApi.instance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const logoutFn = useEvent(logout);
    const setMessageFn = useEvent(setMessage);
    if (error.response?.status !== 200) {
      if (error.response?.status === 401) {
        logoutFn();
      } else if (error.response?.status) {
        const code = error.response.status;
        const message = codeErrors(code);
        setMessageFn({
          type: 'error',
          message,
        });
      }
    }
    return Promise.reject(error);
  }
);
