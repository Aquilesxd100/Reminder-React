import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL } from "../../helpers/requestsData";
import { TokensValidationType, TokenAuthType, ValidTokenType } from "../../types/otherTypes";

export const validTokenRequest = createAsyncThunk(
    "validToken",
    async (tokenInfos : TokenAuthType, thunkAPI) => {
        const tokenAuth = await fetch(`${apiURL}/username`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `bearer ${tokenInfos.token}`
                }
            })
            .then((res) => res.json())
            .then((data) => data)
            .then((data) => {
                const validToken : ValidTokenType = {
                    validation : false,
                    type : tokenInfos.type,
                    userName: data.userName ? data.userName : undefined
                };
                if(data.userName) validToken.validation = true;
                return validToken;
            })
            .catch((error) => error)
        return tokenAuth;
    }
)

const initialState : TokensValidationType = {
    checkedSessionToken: undefined,
    checkedLocalToken: undefined,
    userName: "",
    loadingStateCheck: false
};
export const checkTokenSlice = createSlice({
    name: "checkToken",
    initialState,
    reducers: {
        setInLoadingStateCheck: (state) => {
            state.loadingStateCheck = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(validTokenRequest.fulfilled, (state, action : any) => {
            if(action.payload.userName) state.userName = action.payload.userName;
            if(action.payload.type === "local") {
                state.checkedLocalToken = action.payload.validation;
            } else if (action.payload.type === "session") {
                state.checkedSessionToken = action.payload.validation;
            };
            state.loadingStateCheck = false;
        });
    }
});
export const { setInLoadingStateCheck } = checkTokenSlice.actions;
export default checkTokenSlice.reducer;
