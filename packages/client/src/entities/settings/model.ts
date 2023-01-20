import { createEvent, restore } from 'effector';
import connectLocalStorage from 'effector-localstorage';
import { defaultSettings } from './const';
import { Settings } from './types';

export const setSettings = createEvent<Settings>();

const settingsLocalStorage = connectLocalStorage('settings').onError(err =>
  console.log(`settingsLocalStorage error: ${err}`)
);


export const $settings = restore(
  setSettings,
  settingsLocalStorage.init(defaultSettings) as Settings
);

$settings.watch(settingsLocalStorage);
