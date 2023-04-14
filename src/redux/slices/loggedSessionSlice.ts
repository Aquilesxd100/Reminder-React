import { createSlice } from "@reduxjs/toolkit"
import { SessionStorageType } from "../../types/userTypes"
const initialState : SessionStorageType = {
    loggedSessionAccountToken: undefined,
};
export const loggedSessionSlice = createSlice ({
    name: "sessionStorageLoggedUser",
    initialState,
    reducers: {
        sessionLogOut: (state) => {
            state.loggedSessionAccountToken = undefined;
        },
    },
});
export const { sessionLogOut } = loggedSessionSlice.actions;
export default loggedSessionSlice.reducer;