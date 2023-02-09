import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { BlocoNotasLogin, Linha, InputPadrao, BotaoFormulario, Corpo } from "../../styles/global";
import Footer from "../../components/Footer";
import GridLogo from "../../components/GridLogo";
import { Formulario } from "./LoginStyles";
function Login() {
    return (
        <>
            <Corpo container>
                <GridLogo />
                <Formulario item container xs={12} md={6}>
                    <BlocoNotasLogin>
                        <Typography variant="h4">Entrar</Typography>
                        <Linha/>
                        <InputPadrao size="small" id="login" label="Login" variant="outlined" required />
                        <InputPadrao size="small" id="senha" label="Senha" variant="outlined" required />
                        <BotaoFormulario variant="contained" color="success">
                            Entrar
                        </BotaoFormulario>
                        <FormControlLabel sx={{ cursor: 'inherit' }} control={<Checkbox defaultChecked />} label="Manter-me conectado" />
                        <a href="/cadastro">
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