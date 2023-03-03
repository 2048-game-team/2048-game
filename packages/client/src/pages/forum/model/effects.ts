import { createEffect } from 'effector';
import { AxiosError } from 'axios';
import { ForumData, NewMessage, NewTopic } from 'pages/forum';
import { getForumData, postNewMessage, postNewTopic } from 'pages/forum/forumApi/api';

export const getForumDataFx = createEffect<void, ForumData, AxiosError>(
  async () => {
    const res = await getForumData();
    return res?.data;
  }
);

export const createTopicFx = createEffect<NewTopic, NewTopic, AxiosError>(
  async (data) => {
    const res = await postNewTopic(data);
    return res?.data;
  }
)

export const createMessageFx = createEffect<NewMessage, NewMessage, AxiosError>(
  async (data) => {
    const res = await postNewMessage(data);
    return res?.data;
  }
)
