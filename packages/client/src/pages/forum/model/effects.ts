import { createEffect } from 'effector';
import axios, { AxiosError } from 'axios';
import { ForumData, NewLike, NewMessage, NewTopic } from 'pages/forum';
import { ServerUrl } from 'root/const';
import { apiPath } from 'pages/forum/forumApi/apiPath';

export const getForumDataFx = createEffect<void, ForumData, AxiosError>(
  async () => {
    const res = await axios.get(ServerUrl + apiPath.getAll);
    return res.data;
  }
);

export const createTopicFx = createEffect<NewTopic, NewTopic, AxiosError>(
  async data => {
    const res = await axios.post(ServerUrl + apiPath.createTopic, data);
    return res.data;
  }
);

export const createMessageFx = createEffect<NewMessage, NewMessage, AxiosError>(
  async data => {
    const res = await axios.post(ServerUrl + apiPath.createMessage, data);
    return res.data;
  }
);

export const createLikeFx = createEffect<NewLike, NewLike, AxiosError>(
  async data => {
    const res = await axios.post(ServerUrl + apiPath.createLike, data);
    return res.data;
  }
);
