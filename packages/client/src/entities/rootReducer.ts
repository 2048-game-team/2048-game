import { combineReducers } from '@reduxjs/toolkit'
import { uiSlice } from 'entities/ui/reducer'

export const rootReducer = combineReducers({
  [uiSlice.name]: uiSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
