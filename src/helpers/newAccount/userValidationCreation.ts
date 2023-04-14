export default function userValidation(userName : string):string | boolean {
    let validation : string | boolean = true;
    if (userName.length < 4) { validation = "Precisa ter ao menos 4 digitos." };
    return validation;
};