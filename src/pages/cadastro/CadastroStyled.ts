import { styled } from "@mui/material";
import { BlocoNotas } from "../../styles/global";
import fundoFormCadastro from "../../images/nota_nova_conta.png";

export const BlocoNotasCadastro = styled(BlocoNotas)(() => ({
    backgroundImage: `url(${fundoFormCadastro})`,
}));