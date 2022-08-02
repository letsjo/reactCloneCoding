import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productInfo: [],
    totalCount: 0,
    loading: true,
    item: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    request(state) {
      state.loading = true;
    },
    requestFail(state) {
      state.loading = false;
    },
    getProductsList(state, action) {
      state.productInfo = action.payload.productInfo;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
    },
    getAllItems(state,action){
        state.itemList = action.payload.data
    },
  },
});


export const itemsSliceAction = itemsSlice.actions;
export default itemsSlice.reducer;
