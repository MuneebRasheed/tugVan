// index.js
import {configureStore} from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice';
import userReducer from './slices/userSlice';
const store = configureStore({
  reducer: {
    booking: bookingReducer,
    user: userReducer,
  },
});

export default store;
