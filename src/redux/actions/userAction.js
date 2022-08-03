import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSliceAction } from "../reducers/userReducer";
import api from "../api";
import {sessionStorageLogin} from "../../App";

const userSignup = createAsyncThunk(
  "user/Signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/user/signup", userData);
      return response;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response);
    }
  }
);

const userLogin = createAsyncThunk(
  "user/Login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", userData);
      return response;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

function userLogout(){
  return async (dispatch) =>{
    api.defaults.headers.common["authorization"] = "";
    sessionStorageLogin.clear();
    dispatch(userSliceAction.logoutUser());
    window.location.reload();
  };
}

// const userLogout = createAsyncThunk(
//     "user/Logout",
//     async ({ rejectWithValue }) => {
//       try {
//         const response = await api.get("/logout");
//         return response;
//       } catch (err) {
//         console.log(err.response);
//         return rejectWithValue(err.response);
//       }
//     }
//   );


// function userLogout(auth) {
//   return async (dispatch) => {
//     console.log("미들웨어에서 받는것!", auth);

//     const LogoutAX = await api
//       .post("logout")
//       .then(function (response) {
//         console.log(response, "로그아웃이 완료되었습니다!");
//         api.defaults.headers.common["authorization"] = "";
//         api.defaults.headers.common["refresh_token"] = "";
//         dispatch(userSliceAction.emptyuser());
//         window.location.reload();
//       })
//       .catch(function (error) {
//         console.log("로그아웃에 실패하였습니다 ㅜ.ㅜ", error);
//       });
//     sessionStorage.clear();
//   };
// }

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

export const userAction = {
  userSignup,
  userLogin,
  userLogout,
};
