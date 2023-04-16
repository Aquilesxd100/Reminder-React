import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL } from "../../helpers/requestsData";
import { AccountInfosType, AccountStatusType } from "../../types/userTypes";

export const createAccountRequest = createAsyncThunk(
    "createAccount",
    async (newAccount : AccountInfosType, thunkAPI) => {
        const response = await fetch(`${apiURL}/newuser/${newAccount.username}/${newAccount.password}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error)
        return response;
    }
);

export const deleteAccountRequest = createAsyncThunk(
    "deleteAccount",
    async (token : string | undefined, thunkAPI) => {
        const response = await fetch(`${apiURL}/deleteuser`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${token}`
            }
        })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error)
        return response;
    }
)

const initialState : AccountStatusType = {
    error: undefined,
}
export const accountSlice = createSlice ({
    name: "account",
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createAccountRequest.fulfilled, (state, action) => {
            if (action.payload.message === "Conta criada com sucesso!") {
                state.error = false;
            }
            else if (action.payload.message && action.payload.message.search("login") !== -1) {
                state.error = {
                    errorType: "login",
                    errorMessage: action.payload.message
                };
            }
            else if (action.payload.message && action.payload.message.search("senha") !== -1) {
                state.error = {
                    errorType: "password",
                    errorMessage: action.payload.message
                };
            };
        });
        builder.addCase(deleteAccountRequest.fulfilled, (state, action) => {
            if (action.payload.message === "Usuário excluído com sucesso!") {
                state.error = false;
            };
        });
    }
});
export const { resetError } = accountSlice.actions;
export default accountSlice.reducer;