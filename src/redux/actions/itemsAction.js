import { createAsyncThunk } from "@reduxjs/toolkit";
import { itemsSliceAction } from "../reducers/itemsReducer";
import api from "../api";

// const loadItemsList = createAsyncThunk(
//   "items/LoadList",
//   async ({ page, categoryId }, { rejectWithValue }) => {
//     try {
//       console.log(page, categoryId);
//       const response = await api.get(
//         `/product?page=${page}&categoryId=${categoryId}`
//       );
//       console.log(response);
//       return response;
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue(err.response);
//     }
//   }
// );

function loadItemsList({ page, categoryId }) {
  return async (dispatch) => {
    dispatch(itemsSliceAction.request());
    await api
      .get(`/product?page=${page}&categoryId=${categoryId}`)
      .then(function (responseList) {
        dispatch(itemsSliceAction.getProductsList(responseList.data));
      })
      .catch(function (err) {
        console.log(err);
        dispatch(itemsSliceAction.requestFail());
      });
  };
}

export const itemsAction = {
  loadItemsList,
};
