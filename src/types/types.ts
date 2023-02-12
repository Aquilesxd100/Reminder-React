export interface AccountType {
    username: string,
    password: string,
    reminders: []
};
export interface LoggedUserType {
    id?: string,
};
export interface AccountStorageType {
    accounts: Array<AccountType>,
    loggedAccount: Array<LoggedUserType>,
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