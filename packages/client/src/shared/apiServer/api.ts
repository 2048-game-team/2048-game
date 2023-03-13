import { Axios } from 'axios';
import { SERVER_URL } from 'root/const';

export const serverApi = new Axios({
  baseURL: SERVER_URL,
});
