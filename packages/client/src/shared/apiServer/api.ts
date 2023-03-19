import { Axios } from 'axios';
import { SERVER_URL } from 'shared/envConsts';

export const serverApi = new Axios({
  baseURL: `${SERVER_URL}/api/v1`,
});
