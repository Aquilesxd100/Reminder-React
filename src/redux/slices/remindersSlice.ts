import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InfosRequestReminders, RemindersStorageType } from "../../types/reminderTypes";
import { apiURL } from "../../helpers/requestsData";

export const listRemindersRequest = createAsyncThunk(
    "",
    async (infosRequest : InfosRequestReminders, thunkAPI) => {
        let extraQueries : string = infosRequest.archivedBox || infosRequest.searchInput
        ? "?" : "";
        if(infosRequest.archivedBox) extraQueries += "archived=true";
        if(infosRequest.archivedBox && infosRequest.searchInput) extraQueries += "&";
        if(infosRequest.searchInput) extraQueries += `search=${infosRequest.searchInput}`;
        const response = await fetch(`${apiURL}/reminders${extraQueries}`, {
            method : "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${infosRequest.token}`
            }
        })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error)
        return response;
    }
)

const initialState : RemindersStorageType = {
    reminders: []
}
export const remindersSlice = createSlice({
    name: "reminders",
    initialState,
    reducers: {
        resetReminders: (state) => {
            state.reminders = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(listRemindersRequest.fulfilled, (state, action) => {
            if(!action.payload.message) {
                state.reminders = action.payload;
            };
        });
    }
});

export const { resetReminders } = remindersSlice.actions;
export default remindersSlice.reducer;