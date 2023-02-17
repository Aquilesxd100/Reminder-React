import { Button, styled } from "@mui/material";
import fundolembretesIMG from "../../../images/fundo-lembretes.jpg";
export const LembreteTBody = styled('tbody')(() => ({
    '& tr' : {
        backgroundImage: `url(${fundolembretesIMG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    '& th' : {
        padding: '5px 10px',
    },
    '& span' : {
        fontSize: 'calc(3px + 1.4vw)',
        fontFamily: 'comic-b',
        color: '#BAC7ED',
    },
    '@media screen and (max-width: 767px)' : {
        '& tr' : {
            display: 'flex',
            flexWrap: 'wrap',
        },
        '& th' : {
            padding: '5px 10px',
            fontSize: '16px',
        },
        '& span' : {
            fontSize: '20px',
            color: '#BAC7ED',
        },
        '& p' : {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
    }
}));
export const TrBasico = styled('tr')(() => ({
    '@media screen and (max-width: 767px)' : {
        boxShadow: '3px 0px 2.5px rgb(0 0 0 / 80%)',
    }
}));
export const TrDescricao = styled('tr')(() => ({
    '@media screen and (max-width: 767px)' : {
        boxShadow: '3px 0px 2.5px rgb(0 0 0 / 80%)',
    }
}));
export const ThAcao = styled('th')(() => ({
    maxWidth: '39%',
    border: 'solid #859CDF 4px',
    '@media screen and (max-width: 767px)' : {
        width: '100%',
        maxWidth: 'none',
    }
}));
export const ThData = styled('th')(() => ({
    border: 'solid #859CDF 4px',
    '@media screen and (max-width: 767px)' : {
        border: 'none',
        borderBottom: 'solid #859CDF 4px',
        borderLeft: 'solid #859CDF 4px',
        width: '53%',
    }
}));
export const ThHora = styled('th')(() => ({
    border: 'solid #859CDF 4px',
    '@media screen and (max-width: 767px)' : {
        width: '47%',
        border: 'none',
        borderRight: 'solid #859CDF 4px',
        borderLeft: 'solid #859CDF 4px',
        borderBottom: 'solid #859CDF 4px',        
    }
}));
export const ThDescricao = styled('th')(() => ({
    border: 'solid #859CDF 4px',
    boxShadow: '4px 3.5px 3.5px #000000',
    '@media screen and (max-width: 767px)' : {
        boxShadow: 'none',
        overflowWrap: 'break-word',
        maxWidth: '90vw',
        width: '100%',
        minWidth: '100%',
        border: 'none',
        borderLeft: 'solid #859CDF 4px',
        borderRight: 'solid #859CDF 4px',
        borderBottom: 'solid #859CDF 4px',
    }
}));
export const ThBotoesDesktop = styled('th')(() => ({
    textAlign: 'center',
    width: '18%',
    minWidth: '190px',
    boxShadow: '4px 3.5px 3.5px #000000',
    border: 'solid #859CDF 4px',
    '@media screen and (max-width: 767px)' : {
        display: 'none'
    }
}));
export const BotaoEdicao = styled(Button)(() => ({
    backgroundColor: '#FC9803',
    minWidth: 'auto',
    margin: '0 2%',
    transition: 'inherit',
    padding: '3px 15px',
    '& svg' : {
        color: '#FFFFFF',
    },
    ':hover' : {
        backgroundColor: '#FC9803',
        filter: 'brightness(1.25)',
        borderColor: '#000000',
        '& svg' : {
            color: '#000000',
        }
    }
}));
export const TrBotoesMobile = styled('tr')(() => ({
    boxShadow: '3px 0px 2.5px rgb(0 0 0 / 80%)',
    '@media screen and (min-width: 767.1px)': {
        display: 'none',
    }
}));
export const ThBotoesMobile = styled('th')(() => ({
    display: 'flex',
    justifyContent: 'center',
    borderLeft: 'solid #859CDF 4px',
    borderRight: 'solid #859CDF 4px',
    borderBottom: 'solid #859CDF 4px',
    width: '100%',
    boxShadow: '0px 2.5px 2.5px rgb(0 0 0 / 80%)',
}));
export const BotaoExcluir = styled(Button)(() => ({
    backgroundColor: '#D90000',
    minWidth: 'auto',
    margin: '0 2%',
    transition: 'inherit',
    padding: '3px 15px',
    '& svg' : {
        color: '#FFFFFF',
    },
    ':hover' : {
        backgroundColor: '#D90000',
        filter: 'brightness(1.25)',
        borderColor: '#000000',
        '& svg' : {
            color: '#000000',
        }
    }
}));
export const BotaoExcluirMobile = styled(BotaoExcluir)(() => ({
    padding: '6px 20px',
}));
export const BotaoEdicaoMobile = styled(BotaoEdicao)(() => ({
    padding: '6px 20px',
}));

