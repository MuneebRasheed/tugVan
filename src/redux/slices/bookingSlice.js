// bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: [],
    loading: false,
    error: null,
         // companyId:"64e6f3aaede060201015de57",//tugvan
     companyId:"64ad31ae785d3f110cb88cbf",// usman akram
  },
  reducers: {
    setBookings(state, action) {
      state.bookings = action.payload;
    },
    setOneBookings(state, action) {
      state.bookings.unshift(action.payload);
      console.log("In action reducers", state.bookings)
     
      },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setBookings, setLoading, setError,setOneBookings } = bookingSlice.actions;

export default bookingSlice.reducer;
