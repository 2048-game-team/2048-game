import axios from 'axios';
import { SERVER_URL } from 'client/const';

export const serverApi = axios.create({
  baseURL: `${SERVER_URL}/api/v1`,
});
