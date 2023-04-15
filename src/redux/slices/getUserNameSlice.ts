import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL } from "../../helpers/requestsData";

export const getUserNameRequest = createAsyncThunk(
    "",
    async (token : string, thunkAPI) => {
        const response = await fetch(`${apiURL}/username`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "authorization" : `bearer ${token}`
            }
        })
        .then((res) => res.json())
        .then((data) => data)
        return response;
    }
)

const initialState = {
    currentUserName: undefined
}
export const getUserNameSlice = createSlice ({
    name: "getUserName",
    initialState,
    reducers: {
        clearUserName: (state) => {
            state.currentUserName = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserNameRequest.fulfilled, (state, action) => {
            if(action.payload.userName) {
                state.currentUserName = action.payload.userName;
            };
        })
    }
});
export const { clearUserName } = getUserNameSlice.actions;
export default getUserNameSlice.reducer;