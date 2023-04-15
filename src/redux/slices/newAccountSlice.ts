import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AccountStatusType, AccountInfosType } from "../../types/userTypes";
import { apiURL } from "../../helpers/requestsData";

export const createAccountRequest = createAsyncThunk(
    "",
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

const initialState : AccountStatusType = {
    error: undefined,
};
export const newAccountSlice = createSlice({
    name: "newAccount",
    initialState,
    reducers: {},
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
        })
    }
});



export const { } = newAccountSlice.actions;
export default newAccountSlice.reducer;