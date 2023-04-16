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

export const logInRequest = createAsyncThunk(
    "logIn",
    async (logInInfos : AccountInfosType, thunkAPI) => {
        const response = await fetch(`${apiURL}/login/${logInInfos.username}/${logInInfos.password}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error)
        return response;
    }
)

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
    token: undefined,
    loadingStateUser : false
}
export const accountSlice = createSlice ({
    name: "account",
    initialState,
    reducers: {
        resetError: (state) => {
            state.error = undefined;
        },
        setInLoadingStateAccount: (state) => {
            state.loadingStateUser = true;
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
            state.loadingStateUser = false;
        });
        builder.addCase(deleteAccountRequest.fulfilled, (state, action) => {
            if (action.payload.message === "Usuário excluído com sucesso!") {
                state.error = false;
            };
            state.loadingStateUser = false;
        });
        builder.addCase(logInRequest.fulfilled, (state, action) => {
            if (action.payload.token) {
                state.token = action.payload.token;
            } else {
                state.error = action.payload.message;
            };
            state.loadingStateUser = false;
        });
    }
});
export const { resetError, setInLoadingStateAccount } = accountSlice.actions;
export default accountSlice.reducer;