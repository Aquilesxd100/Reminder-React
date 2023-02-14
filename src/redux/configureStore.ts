import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./slices/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session"
const persistStorageConfig = {
    key: 'accounts',
    storage,  
};
const persistSessionConfig = {
    key: 'accounts',
    storage:storageSession  
};
const persistedReducer = persistReducer(persistStorageConfig, userReducer);
const sessionReducer = persistReducer(persistSessionConfig, userReducer);
const store = configureStore({
    reducer: {
        users: persistedReducer,
        loggedStorageAccount: persistedReducer,
        loggedSessionAccount: sessionReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
});
const persistor = persistStore(store);
export type UserStore = typeof store.dispatch;
export const useStoreDispatch: () => UserStore = useDispatch;
export { store, persistor };