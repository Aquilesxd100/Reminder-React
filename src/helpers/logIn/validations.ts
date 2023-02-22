import { AccountType } from "../../types/userTypes";
export default function userValidation(username : string, password : string, accounts : Array<AccountType>): string | boolean {
    let validation : string | boolean = true;
    if (accounts.length) {
        let index : number = accounts.findIndex((account : AccountType) => account.username === username);
        if (index !== -1){
            if (accounts[index].password === password) {
                return validation;
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