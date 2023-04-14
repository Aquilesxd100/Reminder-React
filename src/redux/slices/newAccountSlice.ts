import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NewAccountStorageType, NewAccountType } from "../../types/userTypes";
import { apiURL } from "../../helpers/requestsData";

export const createAccountRequest = createAsyncThunk(
    "",
    async (newAccount : NewAccountType, thunkAPI) => {
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

const initialState : NewAccountStorageType = {
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
            else if (action.payload.message.search("login") !== -1) {
                state.error = {
                    errorType: "login",
                    errorMessage: action.payload.message
                };
            }
            else if (action.payload.message.search("senha") !== -1) {
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