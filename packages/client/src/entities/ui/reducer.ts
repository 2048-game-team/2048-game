import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { initialState, State } from './state'

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    switchTheme: (state, { payload }: PayloadAction<State>) => {
      state.theme = payload.theme
    },
  },
})

export const { switchTheme } = uiSlice.actions
