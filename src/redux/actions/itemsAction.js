import { itemsSliceAction } from "../reducers/itemsReducer";
import axios from "axios";

function loadDetailItem({id}) {
    return async (dispatch) => {
    
      const data = await apiJson
      .get(`/product/detail?productId=${id}`)
      .then(function (response) {
        console.log(response.data, "에러안남!!!!!");
        dispatch(itemsAction.getDetailItem({data})
          )})
      .catch(error) {
        console.log(error);
      }
    };
}
 

export const itemsAction = {
    getItems,

};
