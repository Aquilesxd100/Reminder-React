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
export interface AccountStatusType {
    error: undefined | ErrorInfosType | false,
};
export interface LogInStatusType {
    error: undefined | ErrorInfosType | false,
    token: string | undefined
};
export interface AccountInfosType {
    username: string,
    password: string
};