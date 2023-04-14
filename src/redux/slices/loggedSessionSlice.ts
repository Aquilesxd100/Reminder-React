import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SessionStorageType } from "../../types/userTypes"
const initialState : SessionStorageType = {
    loggedSessionAccountToken: undefined,
};
export const loggedSessionSlice = createSlice ({
    name: "sessionStorageLoggedUser",
    initialState,
    reducers: {
        sessionLogIn: (state, action : PayloadAction<string>) => {
            state.loggedSessionAccountToken = action.payload;
        },
        sessionLogOut: (state) => {
            state.loggedSessionAccountToken = undefined;
        },
    },
});
export const { sessionLogIn, sessionLogOut } = loggedSessionSlice.actions;
export default loggedSessionSlice.reducer;