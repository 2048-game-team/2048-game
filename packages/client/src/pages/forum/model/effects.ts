import { createEffect } from 'effector';
import axios, { AxiosError } from 'axios';
import { ForumData, NewLike, NewMessage, NewTopic } from 'pages/forum';
import { apiPath } from 'shared/apiServer/apiPath';
import { SERVER_URL } from 'shared/envConsts';

export const getForumDataFx = createEffect<void, ForumData, AxiosError>(
  async () => {
    const res = await axios.get(SERVER_URL + apiPath.getAll);
    return res.data;
  }
);

export const createTopicFx = createEffect<NewTopic, NewTopic, AxiosError>(
  async data => {
    const res = await axios.post(SERVER_URL + apiPath.createTopic, data);
    return res.data;
  }
);

export const createMessageFx = createEffect<NewMessage, NewMessage, AxiosError>(
  async data => {
    const res = await axios.post(SERVER_URL + apiPath.createMessage, data);
    return res.data;
  }
);

export const createLikeFx = createEffect<NewLike, NewLike, AxiosError>(
  async data => {
    const res = await axios.post(SERVER_URL + apiPath.createLike, data);
    return res.data;
  }
);
