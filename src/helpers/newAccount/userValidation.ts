import { AccountType } from "../../types/types";
export default function userValidation(userName : string, accounts : Array<AccountType>):string | boolean {
    let validation : string | boolean = true;
    if (accounts.length) {
        accounts.forEach((account) => {
            if (userName === account.username) { validation = "Esse login já existe." };
        });
    };
    if (userName.length < 4) { validation = "Precisa ter ao menos 4 letras." };
    return validation;
};