import { Typography } from "@mui/material";
import { BlocoNotasCadastro, Linha, Corpo } from "../../styles/global";
import Footer from "../../components/Footer";
import GridLogo from "../../components/GridLogo";
import { FormularioCadastro, InputCadastro, BotaoCadastro } from "./CadastroStyles";
function Cadastro() {
    return (
        <>
            <Corpo container>
                <GridLogo />
                <FormularioCadastro item container xs={12} md={6}>
                    <BlocoNotasCadastro>
                        <Typography variant="h4">Cadastro</Typography>
                        <Linha/>
                        <InputCadastro size="small" id="login" label="Seu Login" variant="outlined" required />
                        <InputCadastro size="small" id="senha" label="Sua Senha" variant="outlined" required />
                        <InputCadastro size="small" id="senha-2" label="Repita a Senha" variant="outlined" required />
                        <BotaoCadastro variant="contained" color="success">
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