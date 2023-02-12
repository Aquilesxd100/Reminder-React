import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewUserType, AccountStorageType } from "../../types/types";
const initialState : AccountStorageType = {
    accounts: [],
    loggedAccount: [],
};
export const userSlice = createSlice({
    name: "accountsHandler",
    initialState,
    reducers: {
        newAccount: (state, action : PayloadAction<NewUserType>) => {
            state.accounts.push({
                username: action.payload.username,
                password: action.payload.password,
                reminders: []
            });
        },
        deleteAccount: (state, action) => {

        },
        logIn: (state, action) => {

        },
        logOut: (state, action) => {

        }
    }
})
export const { newAccount, deleteAccount, logIn, logOut } = userSlice.actions;
export default userSlice.reducer;