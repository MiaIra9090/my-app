import { createAction } from '@reduxjs/toolkit';

import * as AT from './actionTypes';

export const clearRequestError = createAction<string>(AT.CLEAR_REQUEST_ERROR);
export const clearRequestStatus = createAction<string>(AT.CLEAR_REQUEST_STATUS);
