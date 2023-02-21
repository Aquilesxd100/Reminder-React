import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalManagerType, ReminderModalType } from "../../types/types";
const initialState : ModalManagerType = {
    showDeleteModalState: false,
    showReminderModalState: {
        type: "",
        show: false,
        reminderEditID: ""
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
        showReminderModal: (state, action : PayloadAction<ReminderModalType>) => {
            state.showReminderModalState.type = action.payload.type;
            state.showReminderModalState.show = true;
            if (action.payload.type === 'edit') {
                state.showReminderModalState.reminderEditID = action.payload.reminderEditID;
            };
        },
        hideReminderModal: (state) => {
            state.showReminderModalState.show = false;
        },
    }
});
export const { showDeleteModal, hideDeleteModal, showReminderModal, hideReminderModal } = modalManagerSlice.actions;
export default modalManagerSlice.reducer;