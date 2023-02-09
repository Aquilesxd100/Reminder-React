import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Logo, BlocoNotasLogin, Linha, InputPadrao, BotaoFormulario, DivLogo, Corpo } from "../../styles/global";
import Footer from "../../components/Footer";
import imgLogo from "../../images/logo.png";
import { Formulario } from "./LoginStyles";
function Login() {
    return (
        <>
            <Corpo container>
                <DivLogo item container justifyContent="center" xs={12} md={6}>
                    <Logo src={imgLogo}/>
                </DivLogo>
                <Formulario item container justifyContent="center" xs={12} md={6}>
                    <BlocoNotasLogin>
                        <Typography variant="h4">Entrar</Typography>
                        <Linha/>
                        <InputPadrao size="small" id="login" label="Login" variant="outlined" required />
                        <InputPadrao size="small" id="senha" label="Senha" variant="outlined" required />
                        <BotaoFormulario variant="contained" color="success">
                            Entrar
                        </BotaoFormulario>
                        <FormControlLabel sx={{ cursor: 'inherit' }} control={<Checkbox defaultChecked />} label="Manter-me conectado" />
                        <a href="">
                            <Typography sx={{ marginTop: '-11px' }} variant="subtitle1">Criar Conta</Typography>
                        </a>
                    </BlocoNotasLogin>
                </Formulario>
            </Corpo>
            <Footer/>
        </>
    )
}
export default Login;