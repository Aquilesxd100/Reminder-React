import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageType } from "../../types/userTypes";
const initialState : LocalStorageType= {
    loggedLocalAccountToken: undefined,
};
export const loggedLocalSlice = createSlice ({
    name: "localStorageLoggedUser",
    initialState,
    reducers: {
        localLogOut: (state) => {
            state.loggedLocalAccountToken = undefined;
        },
    }
});
export const { localLogOut } = loggedLocalSlice.actions;
export default loggedLocalSlice.reducer;