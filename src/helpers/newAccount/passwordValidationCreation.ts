export default function passwordValidation(password : string):boolean | string {
    let validation : string | boolean = true;
    let authNumber : boolean = false;
    const numbers : string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    if (password.length < 4) {
        validation = "Precisa ter ao menos 4 dígitos.";
    }
    for (let v = 0; v < numbers.length; v++) {
        if (password.search(numbers[v]) !== -1) {
            authNumber = true;  
        }
    }
    if (authNumber === false) {
        validation = "Precisa ter ao menos um número.";
    }
    return validation;
}