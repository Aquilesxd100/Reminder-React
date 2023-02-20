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
export interface LoggedUserID {
    id: string
}
export interface ReminderInfos {
    reminderId?: string,
    acao?: string,
    data?: string,
    hora?: string,
    descricao?: string,
    accountId: string
}
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
export interface HeaderProps {
    userName: string,
    userID : string
}
export interface LembreteInfoType {
    id: string,
    acao: string,
    data: string,
    hora: string,
    descricao: string
}
export interface ModalManagerType {
    showDeleteModalState: boolean,
    showReminderModalState: boolean
}
export interface ModalExclusaoProp {
    userID: string,
}