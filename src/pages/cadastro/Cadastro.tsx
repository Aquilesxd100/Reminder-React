import { Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BlocoNotasCadastro, Linha, Corpo } from "../../styles/global";
import Footer from "../../components/Footer";
import GridLogo from "../../components/GridLogo";
import { FormularioCadastro, InputCadastro, BotaoCadastro } from "./CadastroStyles";
import { useStoreDispatch } from "../../redux/configureStore";
import { newAccount } from "../../redux/slices/userSlice";
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
        dispatch(newAccount(newUser));
    }
    return (
        <>
            <Corpo container>
                <GridLogo />
                <FormularioCadastro item container xs={12} md={6}>
                    <BlocoNotasCadastro>
                        <Typography variant="h4">Cadastro</Typography>
                        <Linha/>
                        <InputCadastro onChange={(event) => {setLogin(event.target.value)}} size="small" id="login" label="Seu Login" variant="outlined" required />
                        <InputCadastro onChange={(event) => {setPassword(event.target.value)}} size="small" id="senha" label="Sua Senha" variant="outlined" required />
                        <InputCadastro onChange={(event) => {setRepeatPassword(event.target.value)}} size="small" id="senha-2" label="Repita a Senha" variant="outlined" required />
                        <BotaoCadastro onClick={() => { handleUser() }} variant="contained" color="success">
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