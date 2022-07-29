import { createSlice } from "@reduxjs/toolkit";

let initialState = {

};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers:{

    }
});

export const basketSliceAction = basketSlice.actions;
export default basketSlice.reducer;