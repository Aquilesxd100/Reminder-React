import { styled, FormGroup, Divider, TextField, Button, Grid } from "@mui/material";
import fundoForm from "../images/index.png";
export const Corpo = styled(Grid)(() => ({
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 'calc(100vh - 55px)',
    '@media screen and (max-width: 800px)': {
        height: 'auto',
        minHeight: '100vh' 
    }
}));
export const Logo = styled('img')(() => ({
    width: '55%',
    minWidth: '300px'
}));
export const DivLogo = styled(Grid)(() => ({
'@media screen and (max-width: 800px)': {
    display: 'none'
}
}));
export const BlocoNotasLogin = styled(FormGroup)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 'clamp(120px, 20%, 170px) 3% 0 0',
    width: '80%',
    maxWidth: '650px',
    height: '100%',
    maxHeight: '550px',
    backgroundImage: `url(${fundoForm})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    '@media screen and (min-width: 1350px)': {
        maxHeight: '650px',
        padding: '160px 3% 0 0',
    },
    '@media screen and (max-width: 800px)': {
        padding: 'clamp(100px, 20%, 170px) 3% 0 0',
        minHeight: 'clamp(500px, 80vw, 80vw)',
        minWidth: '310px',
        maxWidth: '500px',
    }
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
    maxWidth: '50vw',
    borderRadius: '5px',
    fontFamily: 'comic',
    margin: '8px 5px 4px 5px',
    '& .MuiOutlinedInput-root' : {
        background: "#FFFFFF",
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#26C9FF',
        borderWidth: '2px',
        padding: '2px 6px',
        borderRadius: '3px',
    },
    '& .MuiFormLabel-root' : {
        fontFamily: 'comic',
        top: '-2px',
        left: '-8px',
        backgroundColor: '#FFFFFF',
        padding: '1px 8px 0 8px',
        borderRadius: '5px',
    },
    '& .MuiFormHelperText-root' : {
        marginTop: '2px',
        textAlign: 'center'
    }
}));
export const BotaoFormulario = styled(Button)(() => ({
    width: '50%',
    margin: '3px 0 0 0'
}))