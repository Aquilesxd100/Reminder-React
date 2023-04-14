import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorageType } from "../../types/userTypes";
const initialState : LocalStorageType= {
    loggedLocalAccountToken: undefined,
};
export const loggedLocalSlice = createSlice ({
    name: "localStorageLoggedUser",
    initialState,
    reducers: {
        localLogIn: (state, action : PayloadAction<string>) => {
            state.loggedLocalAccountToken = action.payload;
        },
        localLogOut: (state) => {
            state.loggedLocalAccountToken = undefined;
        },
    }
});
export const { localLogIn, localLogOut } = loggedLocalSlice.actions;
export default loggedLocalSlice.reducer;