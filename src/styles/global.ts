import { styled, FormGroup, Divider, TextField, Button, Grid } from "@mui/material";
import fundoFormLogin from "../images/nota_login.png";
export const Corpo = styled(Grid)(() => ({
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 'calc(100vh - 55px)',
    '@media screen and (max-width: 800px)': {
        height: 'auto',
        minHeight: '100vh' 
    }
}));
export const Formulario = styled(Grid)(() => ({
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
export const BlocoNotas = styled(FormGroup)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',  
    height: 'auto',
    maxHeight: 'none',
    padding: 'clamp(100px, 14vw, 17vh) 3% clamp(85px, 11vw, 15vh) 0',
    maxWidth: '650px',
    backgroundImage: `url(${fundoFormLogin})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    '@media screen and (min-width: 1350px)': {
        maxHeight: 'auto',
        padding: 'clamp(110px, 14vw, 17vh) 3% clamp(85px, 11vw, 15vh) 0',
    },
    '@media screen and (max-width: 800px)': {
        minHeight: 'auto',
        padding: 'clamp(105px, 14vh, 17vw) 3% clamp(80px, 11vh, 15vw) 0',
        minWidth: '310px',
        maxWidth: '500px',
    },   
    '@media screen and (max-width: 380px)' : {
        '@media screen and (max-height: 520px)' : {
            position: 'relative',
            top: '-15px',
        },
    }
}));
export const InputPadrao = styled(TextField)(() => ({
    textAlign: 'center',
    margin: '3px 5px 3px 5px',
    borderRadius: '5px',
    fontFamily: 'comic',
    '& .MuiFilledInput-root' : {
        background: "#FFFFFF",
    },
    '& .MuiFilledInput-notchedOutline': {
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
    '@media screen and (max-width: 800px)' : {
        width: '50%',
    },
    '& .MuiFormHelperText-root' : {
        marginTop: '2px',
        textAlign: 'center',
        '@media screen and (max-width: 800px)' : {
            position: 'relative',
            fontSize: 'clamp(11px, 2vw, 15px)',
            width: '130%',
            right: '23%'
        }
    },
    '& .MuiInputBase-input' : {
        background: '#FFFFFF',
        textTransform: 'lowercase',
    }
}));
export const BotaoFormulario = styled(Button)(() => ({
    width: '50%',
    margin: '5px 0 0 0'
}));
export const Linha = styled(Divider)(() => ({
    width: '80%',
    height: '3px',
    backgroundColor: '#31BCD5',
    boxShadow: '1px 1px 1px',
    marginBottom: '4px'
}));
export const DivBotoes = styled('div')(() => ({
    width: '100%',
    textAlign: 'center',
}));
export const BotaoConfirmar = styled(Button)(() => ({
    margin: '5px 10px',
    color: '#FFFFFF',
    backgroundColor: '#198754',
    minWidth: '25%',
    '&:hover' : {
        backgroundColor: '#198754',
        filter: 'brightness(1.1)',
        transform: 'scale(1.05)',
    },
    '@media screen and (max-width: 767px)' : {
        minWidth: '65%', 
    }
}));
export const BotaoCancelar = styled(BotaoConfirmar)(() => ({
    backgroundColor: '#DC3545',
    '&:hover' : {
        backgroundColor: '#DC3545',
    }
}));