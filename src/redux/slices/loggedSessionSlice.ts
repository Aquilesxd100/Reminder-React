import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SessionStorageType } from "../../types/userTypes"
const initialState : SessionStorageType = {
    loggedSessionAccountID: undefined,
};
export const loggedSessionSlice = createSlice ({
    name: "sessionStorageLoggedUser",
    initialState,
    reducers: {
        sessionLogIn: (state, action : PayloadAction<string>) => {
            state.loggedSessionAccountID = action.payload;
        },
        sessionLogOut: (state) => {
            state.loggedSessionAccountID = undefined;
        },
    },
});
export const { sessionLogIn, sessionLogOut } = loggedSessionSlice.actions;
export default loggedSessionSlice.reducer;