import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./slices/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'accounts',
    storage
};
const persistedReducer = persistReducer(persistConfig, userReducer);
const store = configureStore({
    reducer: {
        user: persistedReducer,
    }
});
const persistor = persistStore(store);
export type UserStore = typeof store.dispatch;
export const useStoreDispatch: () => UserStore = useDispatch;
export { store, persistor };