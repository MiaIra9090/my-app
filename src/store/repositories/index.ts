import * as myActions from './actions';
import * as selectors from './selectors';
import { slice as reducer } from './slice';
import * as AT from './actionTypes';

const actions = {
  ...reducer.actions,
  ...myActions,
};

export default {
  actions,
  reducer,
  selectors,
  AT,
};
