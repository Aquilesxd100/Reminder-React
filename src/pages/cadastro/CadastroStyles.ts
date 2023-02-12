import { styled } from "@mui/material";
import { Formulario } from "../login/LoginStyles";
import { InputPadrao, BotaoFormulario } from "../../styles/global";
export const FormularioCadastro = styled(Formulario)(() => ({
}));
export const InputCadastro = styled(InputPadrao)(() => ({
    margin: '8px 5px 10px 5px',
    '& .MuiFormHelperText-root' : {
/*        position: 'absolute',
       bottom: '-49%',
       width: 'calc(100% - 4px)',
       left: '-5.5%', */
    }
}));
export const BotaoCadastro = styled(BotaoFormulario)(() => ({
    margin: '8px 0 0 0'
}));