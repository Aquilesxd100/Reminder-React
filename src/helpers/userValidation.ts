export default function userValidation(account : string):boolean {
    let accounts = [];
    let validacao = true;
    if (localStorage.contas) {
        contas = JSON.parse(localStorage.contas);
        for (let conta of contas) {
            if (conta.login === inputLogin.value) {
                validacao = false;
/*                 erroLoginDisponibilidade.style.display="block";  */
                break;
            }
            else {
/*                 erroLoginDisponibilidade.style.display="none";  */
            }
        }
    }
    if (validacao === false) {
/*         inputLogin.style.border="2px solid #FF0000"; */
    }
    else {
/*         inputLogin.style.border="2px solid #2296AA"; */
    }
    return validacao;
};