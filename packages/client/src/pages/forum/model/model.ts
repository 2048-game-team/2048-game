import { createEvent, restore } from 'effector';
import { getForumDataFx } from 'pages/forum/model/effects';
import { ForumData, NewMessage, NewTopic } from 'pages/forum';
import { createGate } from 'effector-react/ssr';

export const $forumData = restore<ForumData>(getForumDataFx, null);

export const GetForumDataGate = createGate({});

export const createTopic = createEvent<NewTopic>();

export const createMessage = createEvent<NewMessage>();
