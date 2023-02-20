import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalManagerType } from "../../types/types";
const initialState : ModalManagerType = {
    showDeleteModalState: false,
    showReminderModalState: {
        type: "",
        show: false
    }
}
export const modalManagerSlice = createSlice({
    name: 'modalManager',
    initialState,
    reducers: {
        showDeleteModal: (state) => {
            state.showDeleteModalState = true;
        },
        hideDeleteModal: (state) => {
            state.showDeleteModalState = false;
        },
        showReminderModal: (state, action : PayloadAction<string>) => {
            state.showReminderModalState.type = action.payload;
            state.showReminderModalState.show = true;
        },
        hideReminderModal: (state) => {
            state.showReminderModalState.show = false;
        },
    }
});
export const { showDeleteModal, hideDeleteModal, showReminderModal, hideReminderModal } = modalManagerSlice.actions;
export default modalManagerSlice.reducer;