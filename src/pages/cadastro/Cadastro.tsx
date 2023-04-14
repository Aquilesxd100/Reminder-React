import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Footer from "../../components/footer/Footer";
import GridLogo from "../../components/logo/GridLogo";
import { BlocoNotasCadastro } from "./CadastroStyled";
import { Linha, Corpo, Formulario, InputPadrao, BotaoFormulario } from "../../styles/global";
import { AlertType, ErrorAuthType, ErrorInputProp } from "../../types/otherTypes";
import userValidation from "../../helpers/newAccount/userValidationCreation";
import passwordValidation from "../../helpers/newAccount/passwordValidationCreation";
import { RootState, useStoreDispatch } from "../../redux/configureStore";
import { setNotification } from "../../redux/slices/notificationsSlice";
import { createAccountRequest } from "../../redux/slices/newAccountSlice";
function Cadastro() {
    const dispatch =  useStoreDispatch();
    const { error } = useSelector((state : RootState) => state.newAccount);
    const { loggedLocalAccountToken } = useSelector((state : RootState) => state.loggedLocalAccount);
    const { loggedSessionAccountToken } = useSelector((state : RootState) => state.loggedSessionAccount);
    const { currentState } = useSelector((state : RootState) => state.notifyAlert);
    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ repeatPassword, setRepeatPassword ] = useState("");
    const [ authSupport, setAuthSupport] = useState(false);
    useEffect(() => {
        if (loggedLocalAccountToken !== undefined || loggedSessionAccountToken !== undefined) {
            window.open("/recados", "_self");
        }
    }, []);
    useEffect(() => {
        if (currentState === true) {
            setTimeout((() => {window.open("/login", "_self");}), 100);
        }
    }, [currentState]);
    useEffect(() => {
        if (error === false) {
            const alertContent : AlertType = {
                textAlert: "Conta criada com sucesso!",
                typeAlert: "success",
            };
            dispatch(setNotification(alertContent));
        }
        else if (error !== undefined) {
            setInputErrors({
                usernameError: error.errorType === "login"
                ? error.errorMessage
                : inputErrors.usernameError,
                passwordError: error.errorType === "password"
                ? error.errorMessage
                : inputErrors.passwordError,
                password2Error: inputErrors.password2Error,
            });
        };
    }, [error])
    function handleUser() {
        const validacaoUserName = userValidation(login);
        const validacaoPassword = passwordValidation(password);
        const validacaoPassword2 = password === repeatPassword ? true : "A senha é diferente.";
        let erro : ErrorAuthType = {
            usernameError: true,
            passwordError: true,
            password2Error: true,
        }
        if (validacaoUserName === true && validacaoPassword === true && validacaoPassword2 === true) {
            dispatch(createAccountRequest({ username: login, password: password }));    
        };
        if (validacaoUserName !== true || validacaoPassword !== true || validacaoPassword2 !== true) {
            setAuthSupport(true);
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
    function checkError(inputType : string, inputValue : string):void {
        if (inputType === 'login' && authSupport) {
            const validacaoUserName = userValidation(inputValue);
            validacaoUserName !== true
            ? setInputNameProp({ error: true, helperText: validacaoUserName })
            : setInputNameProp({ error: false, helperText: "" });
        };
        if (inputType === 'password' && authSupport) {
            const validacaoPassword = passwordValidation(inputValue);
            validacaoPassword !== true
            ? setInputPasswordProp({ error: true, helperText: validacaoPassword })
            : setInputPasswordProp({ error: false, helperText: "" });
        };
        if (inputType === 'password2' && authSupport) {
            const validacaoPassword2 = password === inputValue ? true : "A senha é diferente.";
            validacaoPassword2 !== true
            ? setInputPassword2Prop({ error: true, helperText: validacaoPassword2 })
            : setInputPassword2Prop({ error: false, helperText: "" });
        };
    }
    return (
        <>
            <Corpo container>
                <GridLogo />
                <Formulario item container xs={12} md={6}>
                    <BlocoNotasCadastro>
                        <Typography variant="h4">Cadastro</Typography>
                        <Linha/>
                        <InputPadrao onChange={(event) => {setLogin(event.target.value); checkError('login', event.target.value)}} size="small" id="login" label="Seu Login" variant="filled" required error={inputNameProp.error} helperText={inputNameProp.helperText} inputProps={{maxLength: 10}}/>
                        <InputPadrao onChange={(event) => {setPassword(event.target.value); checkError('password', event.target.value)}} size="small" id="senha" label="Sua Senha" variant="filled" required error={inputPasswordProp.error} helperText={inputPasswordProp.helperText} inputProps={{maxLength: 10, type: 'password'}}/>
                        <InputPadrao onChange={(event) => {setRepeatPassword(event.target.value); checkError('password2', event.target.value)}} size="small" id="senha-2" label="Repita a Senha" variant="filled" required error={inputPassword2Prop.error} helperText={inputPassword2Prop.helperText} inputProps={{maxLength: 10, type: 'password'}}/>
                        <BotaoFormulario onClick={(event) => { handleUser(); event.preventDefault() }} variant="contained" color="success">
                            Criar Conta
                        </BotaoFormulario>
                        <a href="/login">
                            <Typography variant="subtitle1">Já tenho uma conta</Typography>
                        </a>
                    </BlocoNotasCadastro>
                </Formulario>
            </Corpo>
            <Footer/>
        </>
    )
}
export default Cadastro;