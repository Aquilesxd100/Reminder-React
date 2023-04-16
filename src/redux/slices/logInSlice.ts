import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AccountInfosType, LogInStatusType } from "../../types/userTypes";
import { apiURL } from "../../helpers/requestsData";

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

const initialState : LogInStatusType = {
    error : undefined,
    token: undefined
};
export const logInSlice = createSlice({
    name: "logIn",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logInRequest.fulfilled, (state, action) => {
            if (action.payload.token) {
                state.token = action.payload.token;
            } else {
                state.error = action.payload.message;
            }
        });
    }
});

export const {} = logInSlice.actions;
export default logInSlice.reducer;