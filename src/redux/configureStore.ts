import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSliceReducer from "./slices/userSlice";
import loggedSessionSliceReducer from "./slices/loggedSessionSlice";
import notificationsSliceReducer from "./slices/notificationsSlice";
import loggedLocalSliceReducer from "./slices/loggedLocalSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session"
const usersStorageConfig = {
    key: 'accounts',
    storage,  
};
const loggedLocalConfig = {
    key: 'loggedLocalUser',
    storage,  
};
const loggedSessionConfig = {
    key: 'accountsSession',
    storage:storageSession  
};
const notificationsConfig = {
    key: 'notifications',
    storage:storageSession  
};
const usersReducer = persistReducer(usersStorageConfig, userSliceReducer);
const loggedLocalReducer = persistReducer(loggedLocalConfig, loggedLocalSliceReducer);
const loggedSessionReducer = persistReducer(loggedSessionConfig, loggedSessionSliceReducer);
const notificationsReducer = persistReducer(notificationsConfig, notificationsSliceReducer);
const store = configureStore({
    reducer: {
        users: usersReducer,
        loggedLocalAccount: loggedLocalReducer,
        loggedSessionAccount: loggedSessionReducer,
        notifyAlert: notificationsReducer,
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