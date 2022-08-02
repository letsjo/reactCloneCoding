import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    ModalOpen: false,
    ModalRequiredName: "",
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        modalClose(state){
            state.ModalOpen = false;
            state.ModalRequiredName ="";
        },
        modalLoginOpen(state){
            state.ModalOpen = true;
            state.ModalRequiredName ="login";
        },
        modalSignupOpen(state){
            state.ModalOpen = true;
            state.ModalRequiredName ="signup";
        },
    }
});

export const modalSliceAction = modalSlice.actions;
export default modalSlice.reducer;