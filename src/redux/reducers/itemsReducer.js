import { createSlice } from "@reduxjs/toolkit";

let initialState = {

};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers:{

    }
});

export const itemsSliceAction = itemsSlice.actions;
export default itemsSlice.reducer;