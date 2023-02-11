import { createSlice } from "@reduxjs/toolkit";
import userValidation from "../../helpers/userValidation";
import passwordValidation from "../../helpers/passwordValidation";
import { loggedUser, accountType } from "../../types/types";
export const userSlice = createSlice({
    name: "accountsHandler",
    initialState: {
        accounts: Array<accountType>,
        loggedAccount: [],
    },
    reducers: {
        newAccount: (state, action) => {
/*             if (userValidation() && passwordValidation()) {

            } */
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