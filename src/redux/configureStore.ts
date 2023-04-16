import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session"
import loggedSessionSliceReducer from "./slices/loggedSessionSlice";
import notificationsSliceReducer from "./slices/notificationsSlice";
import loggedLocalSliceReducer from "./slices/loggedLocalSlice";
import modalManagerReducer from "./slices/modalManagerSlice";
import logInReducer from "./slices/logInSlice";
import checkTokenReducer from "./slices/checkTokenSlice";
import accountReducer from "./slices/accountSlice";
import remindersReducer from "./slices/remindersSlice";
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
const loggedLocalReducer = persistReducer(loggedLocalConfig, loggedLocalSliceReducer);
const loggedSessionReducer = persistReducer(loggedSessionConfig, loggedSessionSliceReducer);
const notificationsReducer = persistReducer(notificationsConfig, notificationsSliceReducer);
const store = configureStore({
    reducer: {
        modalManager: modalManagerReducer,
        notifyAlert: notificationsReducer,
        logIn: logInReducer,
        loggedLocalAccount: loggedLocalReducer,
        loggedSessionAccount: loggedSessionReducer,
        checkToken: checkTokenReducer,
        account: accountReducer,
        reminders: remindersReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
});
const persistor = persistStore(store);
export type UserStore = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useStoreDispatch: () => UserStore = useDispatch;
export { store, persistor };