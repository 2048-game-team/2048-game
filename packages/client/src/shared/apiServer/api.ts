import { Axios } from 'axios';
import { SERVER_URL } from 'client/const';

export const serverApi = new Axios({
  baseURL: `${SERVER_URL}/api/v1`,
});
