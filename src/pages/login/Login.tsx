import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import GridLogo from "../../components/logo/GridLogo";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { AlertCustom } from "./LoginStyled";
import { BlocoNotas, Linha, InputPadrao, BotaoFormulario, Formulario, Corpo } from "../../styles/global";
import { RootState } from "../../redux/configureStore";
import { ErrorInputProp } from "../../types/otherTypes";
import { AccountType } from "../../types/userTypes"
import userValidation from "../../helpers/logIn/validations";
import { disableNotification } from "../../redux/slices/notificationsSlice";
import { localLogIn } from "../../redux/slices/loggedLocalSlice";
import { sessionLogIn } from "../../redux/slices/loggedSessionSlice";
function Login() {
    const dispatch = useDispatch();
    const errorAndInfoProp : ErrorInputProp = {
        error: false,
        helperText: "",
    };
    const { accounts } = useSelector((state : RootState) => state.users);
    const { loggedLocalAccountID } = useSelector((state : RootState) => state.loggedLocalAccount);
    const { loggedSessionAccountID } = useSelector((state : RootState) => state.loggedSessionAccount);
    const [inputLoginProp, setInputLoginProp] = useState(false);
    const [inputPasswordProp, setInputPasswordProp] = useState(errorAndInfoProp);
    const [inputLogin, setInputLogin] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    useEffect(() => {
        if (loggedLocalAccountID !== undefined || loggedSessionAccountID !== undefined) {
            window.open("/recados", "_self");
        }
    }, []);
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
    function handleUser() {
        const authentication : string | boolean = userValidation(inputLogin, inputPassword, accounts);
        if (authentication === true) {
            let logInAccount : AccountType | undefined = accounts.find((account : AccountType) => account.username === inputLogin);
            if(logInAccount === undefined)return;
            boxChecked === true ? dispatch(localLogIn(logInAccount.id)) : dispatch(sessionLogIn(logInAccount.id));
            window.open('/recados', '_self');
        }
        else {
            setInputLoginProp(true);
            setInputPasswordProp({error: true, helperText: authentication});
        };
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