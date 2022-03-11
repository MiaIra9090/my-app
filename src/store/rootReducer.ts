import { combineReducers } from 'redux';

import { createRequestReducer } from 'store/requestsReducer/slice';

import { slice as repositories } from './repositories/slice';

const requestsReducer = createRequestReducer({ isExpiryFulfilled: false });

export default combineReducers({
  repositories: repositories.reducer,
  requestsReducer,
});
