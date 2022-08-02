import { createAsyncThunk } from "@reduxjs/toolkit";
import { itemsSliceAction } from "../reducers/itemsReducer";
import api from "../api";

function loadDetailItem(id) {
    return async (dispatch) => {
    
      const data = await api
      .get(`/product/detail?productId=${id}`)
      .then(function (response) {
        console.log(response.data);
        dispatch(itemsSliceAction.getProductDetail(response.data));
      })
      .catch(function (err) {
        console.log(err);
      });
    };
}
 
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
  loadDetailItem,
};
