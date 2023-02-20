import { createSlice } from "@reduxjs/toolkit";
import { ModalManagerType } from "../../types/types";
const initialState : ModalManagerType = {
    showDeleteModalState: false,
    showReminderModalState: false
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
        showReminderModal: (state) => {
            state.showReminderModalState = true;
        },
        hideReminderModal: (state) => {
            state.showReminderModalState = false;
        },
    }
});
export const { showDeleteModal, hideDeleteModal, showReminderModal, hideReminderModal } = modalManagerSlice.actions;
export default modalManagerSlice.reducer;