import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NovoLembreteType, ExcluirLembreteType, EditarLembreteType } from "../../types/reminderTypes";
import { NewUserType, AccountStorageType, AccountType } from "../../types/userTypes";
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
            const index : number = state.accounts.findIndex((account : AccountType) => account.id === action.payload);
            state.accounts.splice(index, 1);
        },
        newReminder: (state, action : PayloadAction<NovoLembreteType>) => {
            const index = state.accounts.findIndex((account) => account.id === action.payload.accountID);
            state.accounts[index].reminders.push({
                id: crypto.randomUUID(),
                acao: action.payload.acao,
                data: action.payload.data,
                hora: action.payload.hora,
                descricao: action.payload.descricao,
            });
        },
        editReminder: (state, action : PayloadAction<EditarLembreteType>) => {
            const accountIndex = state.accounts.findIndex((account) => account.id === action.payload.accountID); 
            const reminderIndex = state.accounts[accountIndex].reminders.findIndex((reminder) => reminder.id === action.payload.reminderID);
            state.accounts[accountIndex].reminders[reminderIndex] = {
               id: action.payload.reminderID,
                acao: action.payload.acao,
                data: action.payload.data,
                hora: action.payload.hora,
                descricao: action.payload.descricao
            }
        },
        deleteReminder: (state, action : PayloadAction<ExcluirLembreteType>) => {
            const accountIndex = state.accounts.findIndex((account) => account.id === action.payload.accountID);
            const reminderIndex = state.accounts[accountIndex].reminders.findIndex((reminder) => reminder.id === action.payload.reminderID);
            state.accounts[accountIndex].reminders.splice(reminderIndex, 1);           
        },
    }
})
export const { newAccount, deleteAccount, deleteReminder, editReminder, newReminder } = userSlice.actions;
export default userSlice.reducer;