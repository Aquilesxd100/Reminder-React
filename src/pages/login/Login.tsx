import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { Logo, BlocoNotasLogin, Linha, InputPadrao, BotaoFormulario } from "../../styles/global";
import Footer from "../../components/Footer";
import imgLogo from "../../images/logo.png";
import { Formulario } from "./LoginStyles";
function Login() {
    return (
        <>
            <Grid container justifyContent="space-around" alignItems="center" sx={{ height: "calc(100vh - 55px)" }}>
                <Grid item container justifyContent="center" xs={6}>
                    <Logo src={imgLogo}/>
                </Grid>
                <Formulario item container justifyContent="center" xs={6}>
                    <BlocoNotasLogin>
                        <Typography variant="h4">Entrar</Typography>
                        <Linha/>
                        <InputPadrao size="small" id="login" label="Login" variant="outlined" required />
                        <InputPadrao size="small" id="senha" label="Senha" variant="outlined" required />
                        <BotaoFormulario variant="contained" color="success">
                            Entrar
                        </BotaoFormulario>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Manter-me conectado" />
                    </BlocoNotasLogin>
                </Formulario>
            </Grid>
            <Footer/>
        </>
    )
}
export default Login;