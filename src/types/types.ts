export interface AccountType {
    id: string,
    username: string,
    password: string,
    reminders: []
};
export interface AccountStorageType {
    accounts: Array<AccountType>,
};
export interface AlertStorageType {
    textAlert: string,
    typeAlert: string,
    currentState: boolean
};
export interface AlertType {
    textAlert: string,
    typeAlert: string,
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
export interface LoginUserType {
    usernameError: string,
    passwordError: string,
};
export interface ErrorAuthType {
    usernameError: string | boolean,
    passwordError: string | boolean,
    password2Error: string | boolean,
};
export interface ErrorInputProp {
    error: boolean,
    helperText: string | boolean,
};