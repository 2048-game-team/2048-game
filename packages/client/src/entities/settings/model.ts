import { createEvent, restore } from 'effector';
import { defaultSettings } from './const';
import { Settings } from './types';

export const setSettings = createEvent<Settings>();

export const $settings = restore(setSettings, defaultSettings)
