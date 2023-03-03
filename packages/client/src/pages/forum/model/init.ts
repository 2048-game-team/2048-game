import { sample } from 'effector';
import { $forumData, createMessage, createTopic, GetForumDataGate } from './model';
import { createMessageFx, createTopicFx, getForumDataFx } from './effects';

sample({
  clock: [GetForumDataGate.open, createTopicFx.done],
  target: getForumDataFx,
});

sample({
  clock: getForumDataFx.doneData,
  target: $forumData
})

sample({
  clock: createTopic,
  target: createTopicFx
})

sample({
  clock: createMessage,
  target: createMessageFx
})
