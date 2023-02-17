import { styled } from "@mui/material";
import fundoPainelIMG from "../../images/fundo-conta.jpg";
export const HeaderDiv = styled('header')(() => ({
    width: '100%',
    '@media screen and (max-width: 800px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
}));
export const MiniLogo = styled('img')(() => ({
    float: 'left',
    width: '15vw',
    margin: '1vw',
    '@media screen and (max-width: 767px)' : {
        width: '25vw',
        margin: '3.5vw',
    }
}));
export const PainelUsuario = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    float: 'right',  
    width: 'auto', 
    backgroundImage: `url(${fundoPainelIMG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "4vw",
    margin: "3vw 1.5vw 1.5vw 1.5vw",
    border: "4px solid #75b6f8",
    boxShadow: "#000000cc 0 0 3px",
    '@media screen and (max-width: 767px)' : {
        borderRadius: '4vw',
        height: 'calc(20px + 8vw)',
        margin: '3vw 1.5vw 1.5vw 1.5vw',
    }
}));
export const InfoUsuario = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
}));
export const IconeUsuario = styled('img')(() => ({
    display: 'block',
    float: 'left',
    width: '3.5vw',
    margin: '5px',
    '@media screen and (max-width: 767px)' : {
        width: '8vw',
        margin: '5px',
    }
}));
export const BotaoSairDiv = styled('div')(() => ({
    borderLeft: '4px solid #75b6f8',
    height: '100%',
    padding: '5px 2px 5px 0px',
    marginLeft: '0.7vw',
    '@media screen and (max-width: 767px)' : {
        borderLeft: '4px solid #75b6f8',
        height: '100%',
        padding: '5px 2px 5px 0px',
        marginLeft: '0.7vw',
    }
}));
export const BotaoExcluirDiv = styled('div')(() => ({
    height: '100%',
    padding: '5px 2px 5px 0px',
    '@media screen and (max-width: 767px)' : {
        height: '100%',
        padding: '5px 2px 5px 0px',
    },
}))
export const BotaoPainel = styled('img')(() => ({
    display: 'block',
    width: '3vw',
    margin: '5px 2px',
    cursor: 'pointer',
    ':hover': {
        filter: 'brightness(1.3)',
        transform: 'scale(1.05)',
    },
    '@media screen and (max-width: 767px)' : {
        display: 'block',
        width: '6.5vw',
        margin: '5px 2px',
        cursor: 'pointer'
    }
}));