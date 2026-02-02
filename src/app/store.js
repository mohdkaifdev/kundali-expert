// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
// future mein yahan cartReducer add kar dena

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // devTools: process.env.NODE_ENV !== 'production', // optional, default on
});