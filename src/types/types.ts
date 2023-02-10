export interface accountType {
    username: string,
    password: string,
    reminders: []
}
export interface loggedUser {
    id: string,
}
export interface accountStorage {
    accounts: Array<accountType>,
    loggedAccount: loggedUser,
}