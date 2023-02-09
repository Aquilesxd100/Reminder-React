import { styled } from "@mui/material";
import { Formulario } from "../login/LoginStyles";
export const FormularioCadastro = styled(Formulario)(() => ({
    height: '80%',
    minHeight: '520px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    '@media screen and (max-width: 800px)': {
        display: 'flex',
        alignItems: 'center',
        minHeight: '80%',
        height: 'inherit',
        padding: '10px 0'
    }
}));