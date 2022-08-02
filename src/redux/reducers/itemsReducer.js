import { createSlice } from "@reduxjs/toolkit";

let initialState = {
item: [],
};

const itemsSlice = createSlice({
    name: 'item',
    initialState,
    reducers:{

        getAllItems(state,action){
            state.itemList = action.payload.data
        },

    }
});


export const itemsSliceAction = itemsSlice.actions;
export default itemsSlice.reducer;