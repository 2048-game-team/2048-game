import { createEffect } from 'effector';
import axios, { AxiosError } from 'axios';
import { ForumData, NewLike, NewMessage, NewTopic } from 'pages/forum';
import { apiPath } from 'shared/apiServer/apiPath';
import { $envData } from 'app/model';

let serverUrl: string;
$envData.watch(env => ({ serverUrl } = env));

export const getForumDataFx = createEffect<void, ForumData, AxiosError>(
  async () => {
    const res = await axios.get(serverUrl + apiPath.getAll);
    return res.data;
  }
);

export const createTopicFx = createEffect<NewTopic, NewTopic, AxiosError>(
  async data => {
    const res = await axios.post(serverUrl + apiPath.createTopic, data);
    return res.data;
  }
);

export const createMessageFx = createEffect<NewMessage, NewMessage, AxiosError>(
  async data => {
    const res = await axios.post(serverUrl + apiPath.createMessage, data);
    return res.data;
  }
);

export const createLikeFx = createEffect<NewLike, NewLike, AxiosError>(
  async data => {
    const res = await axios.post(serverUrl + apiPath.createLike, data);
    return res.data;
  }
);
