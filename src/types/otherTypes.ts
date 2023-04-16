import { ReminderModalStateType } from "./reminderTypes"

export interface AlertStorageType {
    textAlert: string,
    typeAlert: string,
    currentState: boolean
};
export interface AlertType {
    textAlert: string,
    typeAlert: string,
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
export interface ModalManagerType {
    showDeleteModalState: boolean,
    showReminderModalState: ReminderModalStateType,
}
export interface MinimumDateType {
    type: string,
    minDate: string
};
export interface HeaderProps {
    token: string | undefined,
    userName: string,
};
export interface TokensValidationType {
    checkedSessionToken : undefined | boolean
    checkedLocalToken : undefined | boolean
    userName: string
};
export interface TokenAuthType {
    token : string,
    type : "local" | "session"
};
export interface ValidTokenType {
    validation : boolean,
    type : "local" | "session",
    userName : string
};

export interface PropsModalLembrete {
    token: string | undefined
}
