import { Reducer, RootState } from './types';

export function getRequestReducer(
  store: RootState,
  reducerName = 'requestsReducer',
): Reducer | never {
  if (!store.requestsReducer || !Object.prototype.hasOwnProperty.call(store, reducerName)) {
    throw new Error(
      "Can't find [requestReducer] in your store, please import [requestReducer] from @packages/helpers-rtkit",
    );
  }

  return store.requestsReducer;
}

export function isNill(data: any) {
  return data === null || data === undefined;
}
