import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import GridLogo from "../../components/logo/GridLogo";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { AlertCustom } from "./LoginStyled";
import { BlocoNotas, Linha, InputPadrao, BotaoFormulario, Formulario, Corpo } from "../../styles/global";
import { RootState, UserStore } from "../../redux/configureStore";
import { ErrorInputProp, TokenAuthType } from "../../types/otherTypes";
import { AccountInfosType, AccountType } from "../../types/userTypes"
import { disableNotification } from "../../redux/slices/notificationsSlice";
import { localLogIn, localLogOut } from "../../redux/slices/loggedLocalSlice";
import { sessionLogIn, sessionLogOut } from "../../redux/slices/loggedSessionSlice";
import { logInRequest } from "../../redux/slices/logInSlice";
import { validTokenRequest } from "../../redux/slices/checkTokenSlice";
function Login() {
    const dispatch = useDispatch<UserStore>();
    const errorAndInfoProp : ErrorInputProp = {
        error: false,
        helperText: "",
    };
    const { checkedSessionToken, checkedLocalToken } = useSelector((state : RootState) => state.checkToken);
    const { error, token } = useSelector((state : RootState) => state.logIn);
    const { loggedLocalAccountToken } = useSelector((state : RootState) => state.loggedLocalAccount);
    const { loggedSessionAccountToken } = useSelector((state : RootState) => state.loggedSessionAccount);
    const [inputLoginProp, setInputLoginProp] = useState(false);
    const [inputPasswordProp, setInputPasswordProp] = useState(errorAndInfoProp);
    const [inputLogin, setInputLogin] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    useEffect(() => {
        if (loggedLocalAccountToken !== undefined) {
            const localToken : TokenAuthType = {
                token: loggedLocalAccountToken,
                type: "local"
            };
            dispatch(validTokenRequest(localToken));
        };
        if(loggedSessionAccountToken !== undefined) {
            const sessionToken : TokenAuthType = {
                token: loggedSessionAccountToken,
                type: "session"
            };
            dispatch(validTokenRequest(sessionToken));
        };
    }, []);
    useEffect(() => {
        if(checkedSessionToken === false) dispatch(sessionLogOut());
        if(checkedLocalToken === false) dispatch(localLogOut());
        if (checkedSessionToken || checkedLocalToken) {
            setTimeout(() => { window.open("/recados", "_self"); }, 350);
        };
    }, [checkedSessionToken, checkedLocalToken]);

    const { textAlert, typeAlert, currentState } = useSelector((state : RootState) => state.notifyAlert);
    const alertTypeProp: any = "success";
    const [alertType, setAlertType] = useState(alertTypeProp);
    useEffect(() => {
            if (textAlert !== "" && currentState === true) {
                let alertStatus = {
                    typeAlert: typeAlert,
                    textAlert: textAlert
                }
                alertDefault.current.children[1].innerText = alertStatus.textAlert;
                setAlertType(alertStatus.typeAlert);
                setTimeout((() => {alertDefault.current.style.top = "0px";}), 650);
                dispatch(disableNotification());
            };        
    }, []);
    function closeAlert() {
        alertDefault.current.style.pointerEvents = "none";
        alertDefault.current.style.opacity = "0"; 
    }
    const [boxChecked, setBoxChecked] = useState(true);
    
    useEffect(() => {
        if (token) {
            boxChecked === true ? dispatch(localLogIn(token)) : dispatch(sessionLogIn(token));
            setTimeout((() => { window.open('/recados', '_self'); }), 350);
        }
        else if (typeof error === "string") {
            setInputLoginProp(true);
            setInputPasswordProp({error: true, helperText: error}); 
        };
    }, [error, token]);

    function handleUser() {
        const logInInfos : AccountInfosType = {
            username: inputLogin,
            password: inputPassword
        };
        dispatch(logInRequest(logInInfos));
    }
    const alertDefault : any = useRef();
    return (
        <>
            <Corpo container>
                <AlertCustom ref={alertDefault} severity={alertType} onClose={() => {closeAlert()}}></AlertCustom>
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
                        <FormControlLabel sx={{ cursor: 'inherit' }} control={<Checkbox defaultChecked onChange={((event) => { setBoxChecked(event.target.checked)})} />} label="Manter-me conectado" />
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