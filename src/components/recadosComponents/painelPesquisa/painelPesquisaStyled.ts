import { Box, FormGroup, styled } from "@mui/material";
export const Barra = styled('form')(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'none',
    '@media screen and (max-width: 627px)' : {
        flexDirection: 'column'
    },
}));
export const BarraPesquisa = styled(Box)(() => ({
    display: 'flex',
    backgroundColor: '#DCF1F6',
    borderLeft: 'solid 4px #75b6f8',
    borderRight: 'solid 4px #75b6f8',
    borderBottom: 'solid 4px #75b6f8',
    boxShadow: '2px 1.5px 1.2px rgba(0, 0, 0, 0.7)',
    '@media screen and (max-width: 767px)' : {
        width: '100%',
        boxShadow: '0px 1.5px 1.2px rgba(0, 0, 0, 0.7)',
        borderLeft: 'none',
        borderRight: 'none',
    },
    '@media screen and (max-width: 627px)' : {
        boxShadow: 'none',
    },
}));
export const InputPesquisa = styled('input')(() => ({
    fontSize: 'clamp(22px, 2.2vw, 38px)',
    fontFamily: 'comic',
    fontWeight: 'normal',
    padding: '2px 2px 2px 15px',
    border: 'none',
    textTransform: 'lowercase',
    background: '#F0F9FB',
    color: '#2592FE',
    '&::placeholder' :{
        color: '#6D9FBA',
        textShadow: 'none',
        textTransform: 'initial'
      },
    ':focus' : {
        outline: 'none'
    },
    '@media screen and (max-width: 627px)' : {
        width: '100%'
    }
}));
export const BotaoPesquisa = styled('button')(() => ({
    padding: '0 15px',
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: 'solid 4px #75b6f8',
    borderRight: 'solid 4px #75b6f8',
    backgroundColor: '#D1EDF3',
    '& svg' : {
        color: '#1383F2',
        position: 'relative',
        transform: 'scale(1.5)',
        top: '1px'
    },
    ':hover' : {
        backgroundColor: '#D1EDF3',
        filter: 'brightness(1.06)',
        cursor: 'pointer'
    },
    '@media screen and (max-width: 627px)' : {
        padding: '0 clamp(15px, 6vw, 40px)',
        borderRight: 'none'
    }
}));
export const CheckBoxPesquisa = styled(FormGroup)(() => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '0 3px 0 7px',
    color: '#017FFF',
    '& .MuiFormControlLabel-label' : {
        position: 'relative',
        top: '1px',
        fontSize: 'clamp(18px, 1.6vw, 27px)',
        fontWeight: 'normal',
    },
    '& svg' : {
        color: '#1976D2',
    },
    '@media screen and (max-width: 627px)' : {
        display: 'none'
    }
}));
export const CheckBoxPesquisaMobile = styled(CheckBoxPesquisa)(() => ({
    '@media screen and (max-width: 627px)' : {
        display: 'flex',
        alignItems: 'center',
        borderBottom: 'solid 4px #75b6f8',
        backgroundColor: '#DCF1F6',
        boxShadow: '0px 1.5px 1.2px rgba(0, 0, 0, 0.7)',
        padding: '0',
        '& span' : {
            padding: '3px 0'
        }
    },
    '@media screen and (min-width: 627.1px)' : {
        display: 'none'
    }
}));