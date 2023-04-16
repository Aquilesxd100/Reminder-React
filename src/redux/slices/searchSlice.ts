import { createSlice } from "@reduxjs/toolkit";
import { SearchStorageType } from "../../types/otherTypes";

const initialState : SearchStorageType = {
    search : "",
    checkBox : false
};

export const searchSlice = createSlice ({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload.search;
            state.checkBox = action.payload.checkBox;
        }
    }
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;