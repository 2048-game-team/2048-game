import { createEffect } from 'effector';
import { AxiosError } from 'axios';
import { ForumData, NewLike, NewMessage, NewTopic } from 'pages/forum';
import { apiPath } from 'shared/apiServer/apiPath';
import { serverApi } from 'shared/apiServer/api';

export const getForumDataFx = createEffect<void, ForumData, AxiosError>(
  async () => {
    const res = await serverApi.get(apiPath.getAll);
    return res.data;
  }
);

export const createTopicFx = createEffect<NewTopic, NewTopic, AxiosError>(
  async data => {
    const res = await serverApi.post(apiPath.createTopic, data);
    return res.data;
  }
);

export const createMessageFx = createEffect<NewMessage, NewMessage, AxiosError>(
  async data => {
    const res = await serverApi.post(apiPath.createMessage, data);
    return res.data;
  }
);

export const createLikeFx = createEffect<NewLike, NewLike, AxiosError>(
  async data => {
    const res = await serverApi.post(apiPath.createLike, data);
    return res.data;
  }
);
