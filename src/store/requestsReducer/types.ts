export interface Reducer {
  loading: { [actionType: string]: any };
  error: { [actionType: string]: any };
  fulfilled: { [actionType: string]: FulfilledMeta };
}

type FulfilledMeta = {
  timestamp: number;
};

export interface RootState {
  requestsReducer?: Reducer;
}

export type Config = {
  expiryTime?: number;
  patterns: {
    request: RegExp;
    success: RegExp;
    failure: RegExp;
  };
  isSaveFulfilled: boolean;
  isExpiryFulfilled: boolean;
};
