import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: { email: "" },
  is_login: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    recodeUser(state, action) {
      state.user = action.payload;
      state.is_login = true;
    },
    logoutUser(state) {
      state.user = {email:""};
      state.is_login = false;
    },
    loginUser(state) {
      state.is_login = true;
    },
  },
});

export const userSliceAction = userSlice.actions;
export default userSlice.reducer;
