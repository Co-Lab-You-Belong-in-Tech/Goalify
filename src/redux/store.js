import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import goalSlice from './goal/goalSlice';

const store = configureStore({
  reducer: {
    goals: goalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
