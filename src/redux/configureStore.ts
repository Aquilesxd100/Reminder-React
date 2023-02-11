import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./slices/userSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
    }
});
export type UserStore = typeof store.dispatch;
export const useStoreDispatch: () => UserStore = useDispatch;
export default store;