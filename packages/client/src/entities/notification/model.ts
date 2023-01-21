import { createEvent, restore } from 'effector';
import { MessageProps } from 'entities/notification/types';

export const setMessage = createEvent<MessageProps>();

export const $message = restore(setMessage, null);
