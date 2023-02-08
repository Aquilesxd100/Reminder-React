import { styled, Box, Divider, TextField, Button } from "@mui/material";
import fundoForm from "../images/index.png";
export const Logo = styled('img')(() => ({
    width: '55%'
}));
export const BlocoNotasLogin = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20% 3% 0 0',
    width: '80%',
    height: '100%',
    backgroundImage: `url(${fundoForm})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
}));
export const Linha = styled(Divider)(() => ({
    width: '80%',
    height: '3px',
    backgroundColor: '#31BCD5',
    boxShadow: '1px 1px 1px',
    marginBottom: '4px'
}));
export const InputPadrao = styled(TextField)(() => ({
    textAlign: 'center',
    background: "#FFFFFF",
    border: 'solid 2.5px #8CC6FF',
    borderRadius: '5px',
    fontFamily: 'comic',
    margin: '8px 5px 4px 5px',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#26C9FF',
        padding: '2px 6px',
        borderRadius: '3px'
    },
    '& .MuiFormLabel-root' : {
        fontFamily: 'comic',
        top: '-2px',
        left: '-8px',
        backgroundColor: '#FFFFFF',
        padding: '1px 8px 0 8px',
        borderRadius: '5px',
    },
}));
export const BotaoFormulario = styled(Button)(() => ({
    width: '50%',
    margin: '5px 0'
}))