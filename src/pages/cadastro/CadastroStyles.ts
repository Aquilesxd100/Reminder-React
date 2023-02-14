import { styled } from "@mui/material";
import { Formulario } from "../login/LoginStyles";
import { InputPadrao, BotaoFormulario } from "../../styles/global";
export const FormularioCadastro = styled(Formulario)(() => ({
   
}));
export const InputCadastro = styled(InputPadrao)(() => ({
    margin: '3px 5px 3px 5px',
    '& .MuiFormHelperText-root' : {
    }
}));
export const BotaoCadastro = styled(BotaoFormulario)(() => ({
    margin: '5px 0 0 0'
}));