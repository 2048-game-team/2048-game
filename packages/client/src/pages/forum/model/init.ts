import { sample } from 'effector';
import {
  $forumData,
  createMessage,
  createTopic,
  GetForumDataGate,
} from './model';
import { createMessageFx, createTopicFx, getForumDataFx } from './effects';
import { MessageProps } from 'entities/notification/types';
import { setMessage } from 'entities/notification/model';

sample({
  clock: [GetForumDataGate.open, createTopicFx.done],
  target: getForumDataFx,
});

sample({
  clock: getForumDataFx.doneData,
  target: $forumData,
});

sample({
  clock: createTopic,
  target: createTopicFx,
});

sample({
  clock: createMessage,
  target: createMessageFx,
});

sample({
  clock: [getForumDataFx.fail, createTopicFx.fail, createMessageFx.fail],
  fn: (): MessageProps => {
    return {
      type: 'error',
      message: 'Ошибка',
      description: 'Ограничение доступа к базе данных',
    };
  },
  target: setMessage,
});
