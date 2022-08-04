import { createAsyncThunk } from "@reduxjs/toolkit";
import { basketSliceAction } from "../reducers/basketReducer";
import api from "../api";

const addCart = createAsyncThunk(
  "cart/Add",
  async ({ productId, count }, { rejectWithValue }) => {
    try {
      const responsebasket = await api.post("/product/basketList", {
        productId,
        count,
      });
      return responsebasket;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const getCart = createAsyncThunk("cart/get", async (none,{rejectWithValue}) => {
  try {
    const response = await api.get("/product/basketList");
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return rejectWithValue(err.response);
  }
});

const delAllCart = createAsyncThunk(
    "cart/DelAll",
    async ( basketId, { rejectWithValue }) => {
      try {
        const responsebasket = await api.delete("/product/basketList");
        console.log(responsebasket);
        return responsebasket;
      } catch (err) {
        console.log(err);
        return rejectWithValue(err.response);
      }
    }
  );

// function LoadBoard() {
//     return async (dispatch) => {

//       const UploadBoardAX = await apiJson
//       .get("posts?size=12&page=0")
//       .then(function (response) {
//         console.log(response.data, "에러안남!!!!!");
//         dispatch(boardSliceAction.loadboard(
//           response.data
//           ))

//       })
//       .catch(function (error) {
//         console.log("에러났음.", error);
//       });
//     };
//   }

export const basketAction = {
  addCart,
  getCart,
  delAllCart,
};
