import { createEvent, restore } from 'effector';
import { persist } from 'effector-storage/local';
import { defaultSettings } from './const';
import { Settings } from './types';

export const setSettings = createEvent<Settings>();

export const $settings = restore(
  setSettings,
  defaultSettings,
);

persist({ store: $settings, key: 'settings' });
