import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BlocoNotasCadastro, Linha, Corpo } from "../../styles/global";
import Footer from "../../components/Footer";
import GridLogo from "../../components/GridLogo";
import { FormularioCadastro, InputCadastro, BotaoCadastro } from "./CadastroStyles";
import { useStoreDispatch } from "../../redux/configureStore";
import { newAccount } from "../../redux/slices/userSlice";
import userValidation from "../../helpers/newAccount/userValidation";
import passwordValidation from "../../helpers/newAccount/passwordValidation";
import { ErrorAuthType, ErrorInputProp } from "../../types/types";
function Cadastro() {
    const dispatch =  useStoreDispatch();
    const { accounts } = useSelector((state : any) => state.user);
    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ repeatPassword, setRepeatPassword ] = useState("");
    function handleUser() {
        const newUser = {
            username: login,
            password: password,
            repeatPassword: repeatPassword
        };
        const validacaoUserName = userValidation(login, accounts);
        const validacaoPassword = passwordValidation(password, repeatPassword);
        let erro : ErrorAuthType = {
            usernameError: true,
            passwordError: true,
            password2Error: true,
        }
        if (validacaoUserName === true && validacaoPassword === true) {
            dispatch(newAccount(newUser));
        };
        if (validacaoUserName !== true || validacaoPassword !== true) {
            erro = {
                usernameError: validacaoUserName,
                passwordError: validacaoPassword,
                password2Error: validacaoPassword,
            };
            setInputErrors(erro);
        }
        else {setInputErrors(erro);};
    }
    const errorAuth : ErrorAuthType = {
        usernameError: true,
        passwordError: true,
        password2Error: true,
    };
    const errorProp : ErrorInputProp = {
        error: false,
        helperText: "",
    };
    const [ inputErrors, setInputErrors ] = useState(errorAuth);
    const [ inputNameProp, setInputNameProp ] = useState(errorProp);
    const [ inputPasswordProp, setInputPasswordProp ] = useState(errorProp);
    const [ inputPassword2Prop, setInputPassword2Prop] = useState(errorProp);
    useEffect(() => {
        if (inputErrors.usernameError !== true) {
            setInputNameProp({ error: true, helperText: inputErrors.usernameError });
        }
        else {
            setInputNameProp({ error: false, helperText: "" });
        }
        if (inputErrors.passwordError !== true) {
            setInputPasswordProp({ error: true, helperText: inputErrors.passwordError });              
        }
        else {
            setInputPasswordProp({ error: false, helperText: "" });
        };
        if (inputErrors.password2Error !== true) {
            setInputPassword2Prop({ error: true, helperText: inputErrors.password2Error });
        }
        else {
            setInputPassword2Prop({ error: false, helperText: "" });
        };
    }, [inputErrors]);
    return (
        <>
            <Corpo container>
                <GridLogo />
                <FormularioCadastro item container xs={12} md={6}>
                    <BlocoNotasCadastro>
                        <Typography variant="h4">Cadastro</Typography>
                        <Linha/>
                        <InputCadastro onChange={(event) => {setLogin(event.target.value)}} size="small" id="login" label="Seu Login" variant="filled" required inputProps={inputNameProp} error={inputNameProp.error} helperText={inputNameProp.helperText} />
                        <InputCadastro onChange={(event) => {setPassword(event.target.value)}} size="small" id="senha" label="Sua Senha" variant="filled" required inputProps={inputPasswordProp} error={inputPasswordProp.error} helperText={inputPasswordProp.helperText} />
                        <InputCadastro onChange={(event) => {setRepeatPassword(event.target.value)}} size="small" id="senha-2" label="Repita a Senha" variant="filled" required inputProps={inputPassword2Prop} error={inputPassword2Prop.error} helperText={inputPassword2Prop.helperText} />
                        <BotaoCadastro onClick={(event) => { handleUser(); event.preventDefault() }} variant="contained" color="success">
                            Criar Conta
                        </BotaoCadastro>
                        <a href="/login">
                            <Typography variant="subtitle1">Já tenho uma conta</Typography>
                        </a>
                    </BlocoNotasCadastro>
                </FormularioCadastro>
            </Corpo>
            <Footer/>
        </>
    )
}
export default Cadastro;