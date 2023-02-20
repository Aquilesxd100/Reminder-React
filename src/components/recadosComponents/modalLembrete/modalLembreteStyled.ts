import { Button, styled, TextField } from "@mui/material";
import fundoLembretesIMG from "../../../images/fundo-lembretes.jpg";
export const FormularioLembrete = styled('form')(() => ({
    position: 'fixed',
    width: '100%',
    height: '100vh',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: '1001',
}));
export const TabelaLembrete = styled('table')(() => ({
    width: '96%',
    textAlign: 'left',
    borderCollapse: 'collapse',
    margin: '0 1% 1% 1%',
    fontSize: 'calc(1px + 1.4vw)',
    '& tr' : {
        backgroundImage: `url(${fundoLembretesIMG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        '@media screen and (max-width: 767px)' : {
            display: 'flex',
            flexWrap: 'wrap',
        },
    }
}));
export const LabelInput = styled('label')(() => ({
    display: 'inline-block',
    fontSize: 'calc(3px + 1.4vw)',
    color: '#BAC7ED',
    textShadow: '1.5px 0 0 rgb(0 0 0), -1.5px 0 0 rgb(0 0 0), 0 1.5px 0 rgb(0 0 0), 0 -1.5px 0 rgb(0 0 0), 0 0 1.5px rgb(0 0 0)',
    fontFamily: 'comic-b',
    '@media screen and (max-width: 767px)' : {
        fontSize: '20px',
        fontFamily: 'comic-b',
        color: '#BAC7ED',
        marginBottom: '3px'
    }
}));
export const ThAcao = styled('th')(() => ({
    maxWidth: '39%',
    border: 'solid #859CDF 4px',
    padding: '5px 10px',
    '@media screen and (max-width: 767px)' : {
        width: '100%',
        maxWidth: 'none',
        border: 'solid #859CDF 4px',
        padding: '5px 10px',
        fontSize: '16px',
    }
}));
export const ThData = styled('th')(() => ({
    border: 'solid #859CDF 4px',
    padding: '5px 10px',
    '@media screen and (max-width: 767px)' : {
        width: '53%',
        border: 'none',
        borderLeft: 'solid #859CDF 4px',
        borderBottom: 'solid #859CDF 4px',
    }
}));
export const ThHora = styled(ThData)(() => ({
    '@media screen and (max-width: 767px)' : {
        borderRight: 'solid #859CDF 4px',
        borderLeft: 'solid #859CDF 4px',
        borderBottom: 'solid #859CDF 4px',
        width: '47%',
    },
}));
export const ThDescricao = styled(ThData)(() => ({
    '@media screen and (max-width: 767px)' : {
        borderLeft: 'solid #859CDF 4px',
        borderRight: 'solid #859CDF 4px',
        borderBottom: 'solid #859CDF 4px',
        width: '100%',
        overflowWrap: 'break-word',
        maxWidth: '90vw',
        minWidth: '100%',
    }
}));
export const InputAcao = styled('input')(() => ({
    width: '80%',
    padding: '5px',
    borderRadius: '4px',
    borderColor: '#859CDF',
    fontFamily: 'comic',
    fontSize: 'calc(3px + 1.4vw)',
    textTransform: 'lowercase',
    display: 'inline-block',
    '@media screen and (max-width: 767px)' : {
        width: '96%',
        fontSize: '15px',
    }
}));
export const InputData = styled(InputAcao)(() => ({
    width: 'auto',
    '@media screen and (max-width: 767px)' : {
        width: '90%',
        fontSize: '15px',
    }
}));
export const InputHora = styled(InputData)(() => ({

}));
export const InputDescricao = styled('textarea')(() => ({
    width: '100%',
    fontFamily: 'comic',
    fontSize: 'calc(3px + 1.4vw)',
    textTransform: 'lowercase',
    padding: '5px',
    borderRadius: '4px',
    borderColor: '#859CDF',
    resize: 'none',
    '@media screen and (max-width: 767px)' : {
        height: '90px',
        fontSize: '15px',
    }
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

