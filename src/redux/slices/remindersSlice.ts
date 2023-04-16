import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InfosRequestDeleteReminderType, InfosRequestEditReminderType, InfosRequestNewReminderType, InfosRequestRemindersType, ReminderType, RemindersStorageType } from "../../types/reminderTypes";
import { apiURL } from "../../helpers/requestsData";

export const listRemindersRequest = createAsyncThunk(
    "listReminders",
    async (infosRequest : InfosRequestRemindersType, thunkAPI) => {
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
);

export const createReminderRequest = createAsyncThunk(
    "createReminder",
    async (infosRequest : InfosRequestNewReminderType, thunkAPI) => {
        const response = await fetch(`${apiURL}/newreminder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${infosRequest.token}` 
            },
            body: JSON.stringify({
                action: infosRequest.action,
                date: infosRequest.date,
                time: infosRequest.time,
                description: infosRequest.description
            })
        })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error)
        return response;
    }
);

export const editReminderRequest = createAsyncThunk(
    "editReminder",
    async (infosRequest : InfosRequestEditReminderType, thunkAPI) => {

        const response = await fetch(`${apiURL}/updatereminder/${infosRequest.reminderId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${infosRequest.token}` 
            },
            body: JSON.stringify({
                action: infosRequest.action,
                date: infosRequest.date,
                time: infosRequest.time,
                description: infosRequest.description
            })
        })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => error)
        return response;
    }
)

export const deleteReminderRequest = createAsyncThunk(
    "deleteReminder",
    async (infosRequest : InfosRequestDeleteReminderType, thunkAPI) => {
        const response = await fetch(`${apiURL}/deletereminder/${infosRequest.reminderId}`, {
            method: "DELETE",
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
    storedReminders: [],
    needUpdate: false
}
export const remindersSlice = createSlice({
    name: "reminders",
    initialState,
    reducers: {
        resetReminders: (state) => {
            state.storedReminders = [];
        },
        resetUpdate: (state) => {
            state.needUpdate = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(listRemindersRequest.fulfilled, (state, action) => {
            if(!action.payload.message) {
                state.storedReminders = action.payload;
            };
        });
        builder.addCase(deleteReminderRequest.fulfilled, (state, action) => {
            if(action.payload.message === "Recado excluído com sucesso!") {
                state.needUpdate = true;
            }
        });
        builder.addCase(createReminderRequest.fulfilled, (state, action) => {
            if(action.payload.message === "Recado criado com sucesso!") {
                state.needUpdate = true;
            }
        });
        builder.addCase(editReminderRequest.fulfilled, (state, action) => {
            if(action.payload.message === "Recado atualizado com sucesso.") {
                state.needUpdate = true;
            }
        });
    }
});

export const { resetReminders, resetUpdate } = remindersSlice.actions;
export default remindersSlice.reducer;