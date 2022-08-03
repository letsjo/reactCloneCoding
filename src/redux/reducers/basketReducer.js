import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartList: {
    basketId: 0,
    buyProductList: [],
    deliveryFee: 0,
  },

};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    getCartList(state,action){
        state.cartList = action.payload;
    }
  },
});

export const basketSliceAction = basketSlice.actions;
export default basketSlice.reducer;
