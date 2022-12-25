import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

import { rootReducer } from './rootReducer'

const logger = createLogger({
  collapsed: true,
  diff: true,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
})

export type AppStoreDispatch = typeof store.dispatch
