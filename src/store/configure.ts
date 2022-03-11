import { configureStore, isPlain } from '@reduxjs/toolkit';

import rootReducer from 'store/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        isSerializable: (value: any) => {
          return isPlain(value);
        },
      },
    }),
});

export default store;
