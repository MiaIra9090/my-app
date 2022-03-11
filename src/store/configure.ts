import { configureStore, isPlain } from '@reduxjs/toolkit';

import rootReducer from 'store/rootReducer';

// serializableCheck ругается объекты созданные через конструктор https://github.com/reduxjs/redux-toolkit/blob/next/src/isPlainObject.ts
// const isInstanceOfModel = (value: any) => value?.__proto__.constructor.name === 'Model';

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

// expose store when run in Cypress
// @ts-ignore
if (window.Cypress && __DEV__) {
  // @ts-ignore
  window.store = store;
}

export default store;
