import { createSlice } from "@reduxjs/toolkit";
import { AlertStorageType } from "../../types/types";
const initialState : AlertStorageType = {
    textAlert: "",
    typeAlert: "",
    currentState: false,
}
export const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state.textAlert = action.payload.textAlert;
            state.typeAlert = action.payload.typeAlert;
            state.currentState = true;
        },
        disableNotification: (state) => {
            state.currentState = false;
        }
    }
});
export const { setNotification, disableNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
