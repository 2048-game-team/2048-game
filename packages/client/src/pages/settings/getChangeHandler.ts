import { setSettings, Settings } from 'entities/settings';

export const getChangeHandler =
  (settings: Settings, keyName: string) => (value: number | null) => {
    if (value !== null) {
      setSettings({ ...settings, [keyName]: value });
    }
  };
