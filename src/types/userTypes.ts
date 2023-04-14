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
    loggedSessionAccountToken: string | undefined
};
export interface LocalStorageType {
    loggedLocalAccountToken: string | undefined
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


export interface ErrorInfosType {
    errorType: "login" | "password",
    errorMessage: string
};
export interface NewAccountStorageType {
    error: undefined | ErrorInfosType | false,
};
export interface NewAccountType {
    username: string,
    password: string
};