// src/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  role: null, // 'user' (buyer) or 'seller'
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload.user;
      state.role = action.payload.user.role;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
      state.role = null;
    },
    // Other reducers like updateUser...
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;