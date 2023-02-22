import { LembreteType } from "./reminderTypes"

export interface AccountType {
    id: string,
    username: string,
    password: string,
    reminders: Array<LembreteType>
};
export interface AccountStorageType {
    accounts: Array<AccountType>,
};
export interface SessionStorageType {
    loggedSessionAccountID: string | undefined
};
export interface LocalStorageType {
    loggedLocalAccountID: string | undefined
};
export interface NewUserType {
    username: string,
    password: string,
    repeatPassword: string
};
export interface LoggedUserID {
    id: string
}
export interface LoginUserType {
    usernameError: string,
    passwordError: string,
};