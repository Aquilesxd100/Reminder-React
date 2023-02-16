import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorageType } from "../../types/types";
const initialState : LocalStorageType= {
    loggedLocalAccountID: undefined,
};
export const loggedLocalSlice = createSlice ({
    name: "localStorageLoggedUser",
    initialState,
    reducers: {
        localLogIn: (state, action : PayloadAction<string>) => {
            state.loggedLocalAccountID = action.payload;
        },
        localLogOut: (state) => {
            state.loggedLocalAccountID = undefined;
        },
    }
});
export const { localLogIn, localLogOut } = loggedLocalSlice.actions;
export default loggedLocalSlice.reducer;