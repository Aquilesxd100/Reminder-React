import { useState } from "react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { BlocoNotas, Linha, InputPadrao, BotaoFormulario, Formulario, Corpo } from "../../styles/global";
import Footer from "../../components/Footer";
import GridLogo from "../../components/GridLogo";
import { AccountType, ErrorInputProp } from "../../types/types";
import userValidation from "../../helpers/logIn/validations";
import { useSelector } from "react-redux";
function Login() {
    const errorAndInfoProp : ErrorInputProp = {
        error: false,
        helperText: "",
    };
    const { accounts } = useSelector((state : any) => state.users);
    const { loggedStorageAccount } = useSelector((state : any) => state.loggedStorageAccount)
    const { loggedSessionAccount } = useSelector((state : any) => state.loggedSessionAccount)
    const [inputLoginProp, setInputLoginProp] = useState(false);
    const [inputPasswordProp, setInputPasswordProp] = useState(errorAndInfoProp);
    const [inputLogin, setInputLogin] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    function handleUser() {
        const authentication : string | boolean = userValidation(inputLogin, inputPassword, accounts);
        if (authentication === true) {
            let logInAccount = accounts.filter((account : AccountType) => account.username === inputLogin).map((account : AccountType) => account.username);
        }
        else {
            setInputLoginProp(true);
            setInputPasswordProp({error: true, helperText: authentication});
        };
    }
    return (
        <>
            <Corpo container>
                <GridLogo />
                <Formulario item container xs={12} md={6}>
                    <BlocoNotas>
                        <Typography variant="h4">Entrar</Typography>
                        <Linha/>
                        <InputPadrao onChange={((event) => setInputLogin(event.target.value))} size="small" id="login" label="Login" variant="filled" required inputProps={{maxLength: 10}} error={inputLoginProp} />
                        <InputPadrao onChange={((event) => setInputPassword(event.target.value))} size="small" id="senha" label="Senha" variant="filled" required inputProps={{maxLength: 10, type: 'password'}} error={inputPasswordProp.error} helperText={inputPasswordProp.helperText} />
                        <BotaoFormulario variant="contained" color="success" onClick={(() => { handleUser() })}>
                            Entrar
                        </BotaoFormulario>
                        <FormControlLabel sx={{ cursor: 'inherit' }} control={<Checkbox defaultChecked />} label="Manter-me conectado" />
                        <a href="/cadastro">
                            <Typography sx={{ marginTop: '-11px' }} variant="subtitle1">Criar Conta</Typography>
                        </a>
                    </BlocoNotas>
                </Formulario>
            </Corpo>
            <Footer/>
        </>
    )
}
export default Login;