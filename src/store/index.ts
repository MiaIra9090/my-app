import { AnyAction, ThunkAction } from '@reduxjs/toolkit';

import store from './configure';

export type RootState = ReturnType<typeof store.getState>;

const { dispatch } = store;
export type AppDispatch = typeof dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, AnyAction>;

const getState = store.getState as () => RootState;

export { store, dispatch, getState };
