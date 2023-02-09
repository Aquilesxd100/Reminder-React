import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { BlocoNotasLogin, Linha, InputPadrao, BotaoFormulario, Corpo } from "../../styles/global";
import Footer from "../../components/Footer";
import GridLogo from "../../components/GridLogo";
import { FormularioCadastro } from "./CadastroStyles";
function Cadastro() {
    return (
        <>
            <Corpo container>
                <GridLogo />
                <FormularioCadastro item container xs={12} md={6}>
                    <BlocoNotasLogin>
                        <Typography variant="h4">Cadastro</Typography>
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
                </FormularioCadastro>
            </Corpo>
            <Footer/>
        </>
    )
}
export default Cadastro;