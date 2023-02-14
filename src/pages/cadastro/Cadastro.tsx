import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BlocoNotasCadastro, Linha, Corpo } from "../../styles/global";
import Footer from "../../components/Footer";
import GridLogo from "../../components/GridLogo";
import { FormularioCadastro, InputCadastro, BotaoCadastro } from "./CadastroStyles";
import { useStoreDispatch } from "../../redux/configureStore";
import { newAccount } from "../../redux/slices/userSlice";
import userValidation from "../../helpers/newAccount/userValidationCreation";
import passwordValidation from "../../helpers/newAccount/passwordValidationCreation";
import { ErrorAuthType, ErrorInputProp } from "../../types/types";
function Cadastro() {
    const dispatch =  useStoreDispatch();
    const { accounts } = useSelector((state : any) => state.users);
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
        const validacaoPassword = passwordValidation(password);
        const validacaoPassword2 = password === repeatPassword ? true : "A senha é diferente.";
        let erro : ErrorAuthType = {
            usernameError: true,
            passwordError: true,
            password2Error: true,
        }
        if (validacaoUserName === true && validacaoPassword === true) {
            dispatch(newAccount(newUser));
        };
        if (validacaoUserName !== true || validacaoPassword !== true || validacaoPassword2 !== true) {
            erro = {
                usernameError: validacaoUserName,
                passwordError: validacaoPassword,
                password2Error: validacaoPassword2,
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
        inputErrors.usernameError !== true
        ? setInputNameProp({ error: true, helperText: inputErrors.usernameError })
        : setInputNameProp({ error: false, helperText: "" });

        inputErrors.passwordError !== true 
        ? setInputPasswordProp({ error: true, helperText: inputErrors.passwordError })
        : setInputPasswordProp({ error: false, helperText: "" });

        inputErrors.password2Error !== true
        ? setInputPassword2Prop({ error: true, helperText: inputErrors.password2Error })
        : setInputPassword2Prop({ error: false, helperText: "" });

    }, [inputErrors]);
    return (
        <>
            <Corpo container>
                <GridLogo />
                <FormularioCadastro item container xs={12} md={6}>
                    <BlocoNotasCadastro>
                        <Typography variant="h4">Cadastro</Typography>
                        <Linha/>
                        <InputCadastro onChange={(event) => {setLogin(event.target.value)}} size="small" id="login" label="Seu Login" variant="filled" required error={inputNameProp.error} helperText={inputNameProp.helperText} inputProps={{maxLength: 10}}/>
                        <InputCadastro onChange={(event) => {setPassword(event.target.value)}} size="small" id="senha" label="Sua Senha" variant="filled" required error={inputPasswordProp.error} helperText={inputPasswordProp.helperText} inputProps={{maxLength: 10}}/>
                        <InputCadastro onChange={(event) => {setRepeatPassword(event.target.value)}} size="small" id="senha-2" label="Repita a Senha" variant="filled" required error={inputPassword2Prop.error} helperText={inputPassword2Prop.helperText} inputProps={{maxLength: 10}}/>
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