import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session"
import userSliceReducer from "./slices/userSlice";
import loggedSessionSliceReducer from "./slices/loggedSessionSlice";
import notificationsSliceReducer from "./slices/notificationsSlice";
import loggedLocalSliceReducer from "./slices/loggedLocalSlice";
import modalManagerReducer from "./slices/modalManagerSlice";
import newAccountReducer from "./slices/newAccountSlice";
import logInReducer from "./slices/logInSlice";
import checkTokenReducer from "./slices/checkTokenSlice";
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
        modalManager: modalManagerReducer,
        notifyAlert: notificationsReducer,
        newAccount: newAccountReducer,
        logIn: logInReducer,
        loggedLocalAccount: loggedLocalReducer,
        loggedSessionAccount: loggedSessionReducer,
        checkToken: checkTokenReducer,
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