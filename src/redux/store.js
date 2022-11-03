import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import goalSlice from './goal/goalSlice';
import catagorySlice from './catagory/catagorySlice';

const store = configureStore({
  reducer: {
    goals: goalSlice,
    catagories: catagorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
