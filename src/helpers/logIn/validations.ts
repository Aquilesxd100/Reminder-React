import { AccountType } from "../../types/types";
export default function userValidation(username : string, password : string, accounts : Array<AccountType>): string | boolean | number {
    let validation : string | boolean | number = true;
    if (accounts.length) {
        let index : number = accounts.findIndex((account : AccountType) => account.username === username);
        if (index !== -1){
            if (accounts[index].password === password) {
                validation = index;
            }
            else {
                validation = "Senha ou login incorretos."  
            }
        }
        else {
            validation = "Senha ou login incorretos."
        }
    }
    else {
        validation = "Esse usuário não existe.";
    };
    return validation;
};