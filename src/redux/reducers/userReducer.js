import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: { email: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    recodeUser(state, action) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = {email:""};
    },
  },
});

export const userSliceAction = userSlice.actions;
export default userSlice.reducer;
