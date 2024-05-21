// userSlice.js
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: null,
    companyId: null,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.accessToken = action.payload.access_token;
      state.companyId = action.payload.companyId;
      state.user = action.payload.user;
    },
    clearUser(state) {
      state.accessToken = null;
      state.companyId = null;
      state.user = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {setUser, clearUser, setLoading, setError} = userSlice.actions;

export default userSlice.reducer;
