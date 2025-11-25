// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // Disable Redux DevTools for a production build
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;