export interface AccountType {
    id: string,
    username: string,
    password: string,
    reminders: Array<LembreteType>
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
export interface LembreteType {
    id: string,
    acao: string,
    data: string,
    hora: string,
    descricao: string
}
export interface LembreteInfoType {
    accountId: string,
    id: string,
    acao: string,
    data: string,
    hora: string,
    descricao: string
}
export interface NovoLembreteType {
    accountID : string,
    acao: string,
    data: string,
    hora: string,
    descricao: string
}
export type EditarLembreteType = NovoLembreteType & ExcluirLembreteType;
export interface ExcluirLembreteType {
    accountID : string,
    reminderID: string
}
export interface ReminderModalStateType {
    type: string,
    show: boolean,
    reminderEditID: string
}
export interface ReminderModalType {
    type: string,
    reminderEditID: string
}
export interface ModalManagerType {
    showDeleteModalState: boolean,
    showReminderModalState: ReminderModalStateType,
}
export interface ModalExclusaoProp {
    userID: string,
}