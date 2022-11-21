import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import goalSlice from './goal/goalSlice';
import categorySlice from './category/categorySlice';
import userSlice from './user/userSlice';

const store = configureStore({
  reducer: {
    goals: goalSlice,
    categories: categorySlice,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
