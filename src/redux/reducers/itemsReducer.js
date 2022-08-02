import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productsInfo: [],
    totalCount: 0,
    loading: true,
    productDetail: {
        productName : null,
        imgUrl : null,
        price: 0,
        productDetail : null,
    },
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
      state.productsInfo = action.payload.productInfo;
      state.totalCount = action.payload.totalCount;
      state.loading = false;
    },
    getProductDetail(state,action){
        state.productDetail = action.payload
    },
  },
});


export const itemsSliceAction = itemsSlice.actions;
export default itemsSlice.reducer;
