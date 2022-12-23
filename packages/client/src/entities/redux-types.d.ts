import { AsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit'
import { AppStoreDispatch } from 'entities/store'
import { RootState } from 'entities/rootReducer'
import { Injectable } from '.'
import { AxiosError } from 'axios'

declare module 'react-redux' {
  function useSelector<TSelected>(
    selector: (state: RootState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected

  function useDispatch<AppDispatch extends AppStoreDispatch>(): AppDispatch
}

declare module '@reduxjs/toolkit' {
  type AsyncThunkConfig = {
    dispatch?: AppStoreDispatch
    state: RootState
    extra: Injectable
    rejectValue?: AxiosError['response']
    serializedErrorType?: unknown
    getState: RootState
  }

  function createAsyncThunk<
    Returned,
    ThunkArg = void,
    ThunkApiConfig extends AsyncThunkConfig = {
      state: RootState
      extra: Injectable
      fulfillWithValue: Returned
      rejectValue?: AxiosError['response']
    }
  >(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
      Returned,
      ThunkArg,
      ThunkApiConfig
    >,
    options?: any
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>
}
