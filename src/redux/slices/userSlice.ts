import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewUserType, AccountStorageType, AccountType } from "../../types/types";
const initialState : AccountStorageType = {
    accounts: [],
};
export const userSlice = createSlice({
    name: "accountsHandler",
    initialState,
    reducers: {
        newAccount: (state, action : PayloadAction<NewUserType>) => {
            state.accounts.push({
                id: crypto.randomUUID(),
                username: action.payload.username,
                password: action.payload.password,
                reminders: []
            });
        },
        deleteAccount: (state, action : PayloadAction<string>) => {
            const index : number = state.accounts.findIndex((account : AccountType) => account.username === action.payload);
            state.accounts.splice(index, 1);
        },
    }
})
export const { newAccount, deleteAccount } = userSlice.actions;
export default userSlice.reducer;