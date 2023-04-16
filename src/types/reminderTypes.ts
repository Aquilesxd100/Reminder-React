export interface LembreteInfoType {
    token: string | undefined,
    id: string,
    acao: string,
    data: string,
    hora: string,
    descricao: string,
    archived: boolean,
};
export interface ReminderModalStateType {
    type: string,
    show: boolean,
    reminderEditID: string
};
export interface ReminderModalType {
    type: string,
    reminderEditID: string
};
export interface InfosRequestRemindersType {
    token: string,
    searchInput?: string | undefined,
    archivedBox: boolean,
};
export interface InfosRequestDeleteReminderType {
    token: string | undefined,
    reminderId : string
};
export interface InfosRequestNewReminderType {
    token: string,
    action: string,
    date: string,
    time: string,
    description: string,
};
export interface InfosRequestEditReminderType {
    reminderId: string,
    token: string | undefined,
    action: string,
    date: string,
    time: string,
    description: string,
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
    storedReminders: Array<ReminderType>,
    needUpdate: boolean
};