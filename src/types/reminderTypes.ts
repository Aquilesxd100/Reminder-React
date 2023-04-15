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

export interface InfosRequestReminders {
    token: string,
    searchInput?: string | undefined,
    archivedBox: boolean,
};

export interface ReminderType {
    id: string,
    action: string,
    date: string,
    time: string,
    description: string,
    archived: boolean
};
export interface RemindersStorageType {
    reminders: Array<ReminderType>
};