export enum Theme {
  Light = 'light',
  Dark = 'dark',
}
export interface State {
  theme: Theme
}

export const initialState: State = {
  theme: Theme.Light,
}
