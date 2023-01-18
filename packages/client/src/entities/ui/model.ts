import { createEvent, restore } from 'effector';
import { Theme } from './types';

export const setTheme = createEvent<Theme>();

export const $theme = restore(setTheme, Theme.Light);
