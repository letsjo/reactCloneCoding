import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentSliceAction } from "../reducers/commentReducer";
import api from "../api";

function loadCommentsList({productId}) {
  return async (dispatch) => {
    await api
      .get(`/product/${productId}/comment`)
      .then(function (responseComments) {
        dispatch(commentSliceAction.getCommentsList(responseComments.data.comments));
      })
      .catch(function(err){
        console.log(err);
      });
  };
}

const postComment = createAsyncThunk(
    "post/Comment",
    async ( {productId, postCommentData}, {rejectWithValue}) =>{
        console.log(productId,postCommentData);
        try {
            const response = await api.post(`/product/${productId}/comment`,postCommentData);
            console.log(response);
            return response;
        } catch (err){
            console.log(err);
            return rejectWithValue(err);
        }
    }
);

export const commentAction = {
    loadCommentsList,
    postComment,
};
