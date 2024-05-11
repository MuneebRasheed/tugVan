// index.js
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export default store;
