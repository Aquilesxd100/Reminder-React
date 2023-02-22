export interface ReminderInfos {
    accountId: string
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