import { createEvent, restore } from 'effector';
import { defaultSettings } from './const';
import { Settings } from './types';

const setGameSettings = createEvent<Settings>();

export const $settings = restore(setGameSettings, defaultSettings)
