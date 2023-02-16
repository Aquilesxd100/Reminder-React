import { createSlice } from "@reduxjs/toolkit";
import { AlertType } from "../../types/types";
const initialState : AlertType = {
    text: "",
    type: ""
}
export const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state = action.payload;
        },
        removeNotification: (state) => {
            state = { text: "", type: "" }
        }
    }
});
export const { setNotification, removeNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
