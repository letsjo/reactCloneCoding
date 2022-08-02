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

export const commentAction = {
    loadCommentsList,
};
