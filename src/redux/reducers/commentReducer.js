import { createSlice } from "@reduxjs/toolkit";

let initialState = {

};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers:{

    }
});

export const commentSliceAction = commentSlice.actions;
export default commentSlice.reducer;