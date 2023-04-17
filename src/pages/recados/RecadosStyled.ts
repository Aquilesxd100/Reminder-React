import { Button, styled } from "@mui/material";
import fundoTituloTabelaIMG from "../../images/fundo-titulo.jpg";
import fundoBotaoSairIMG from "../../images/fundo-botao-sair.jpg";
import fundoNuvemIMG from "../../images/nuvem.png";
export const RecadosDiv = styled('div')(() => ({
    position: 'relative',
    width: "96%",
    height: "auto",
    backgroundColor: "rgba(230, 247, 250, 0.9)",
    border: "5px solid #75b6f8",
    borderRadius: "10px",
    margin: "0 2%",
    display: "block",
    clear: "both",
    boxShadow: "rgb(0 0 0 / 50%) 2px 2px 2px",
}));
export const BarraTituloTabela = styled('div')(() => ({
    position: "relative",
    display: "table",
    textAlign: "center",
    width: "100%",
    backgroundImage: `url(${fundoTituloTabelaIMG})`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "contain",
    borderBottom: "solid #75b6f8 5px",
}));
export const TituloTabela = styled('div')(() => ({
    display: 'table-cell',
    verticalAlign: 'middle',
    width: '80%',
    textAlign: 'center',
}));  
export const DivNovoLembrete = styled('div')(() => ({
    borderLeft: 'solid 5px #75b6f8',
    float: 'right',
    padding: '10px 25px 10px 25px',
    height: '100%',
    backgroundImage: `url(${fundoBotaoSairIMG})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
}));  
export const BotaoAdicionar = styled(Button)(() => ({
    fontFamily: 'comic',
    fontSize: 'clamp(15px, 4vw, 19px)',
    textShadow: '1.5px 0 0 rgb(0 0 0), -1.5px 0 0 rgb(0 0 0), 0 1.5px 0 rgb(0 0 0), 0 -1.5px 0 rgb(0 0 0), 0 0 1.5px rgb(0 0 0)',
    color: '#FFFFFF',
    '@media screen and (max-width: 767px)' : {
        padding: '8px 11px'
    }
}));  
export const SecaoLembretes = styled('div')(() => ({
    minHeight: '55vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})); 
export const Lembretes = styled('div')(() => ({
    minHeight: '55vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media screen and (max-width: 767px)' : {
        minHeight: '62vh',
    }
})); 
export const TabelaLembretes = styled('table')(() => ({
    width: '96%',
    textAlign: 'left',
    borderCollapse: 'collapse',
    margin: '0 1% 1% 1%',
    color: '#F0F2FB',
    textShadow: '1.5px 0 0 rgb(0 0 0), -1.5px 0 0 rgb(0 0 0), 0 1.5px 0 rgb(0 0 0), 0 -1.5px 0 rgb(0 0 0), 0 0 1.5px rgb(0 0 0)',
    fontFamily: 'comic',
    fontWeight: 'lighter',
    fontSize: 'calc(1px + 1.4vw)',
})); 
export const AvisoLembreteVazio = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '54vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px'
})); 
export const Nuvemlembretes = styled('div')(() => ({
    padding: '9.5vw 4vw 5.5vw 4vw',
    backgroundImage: `url(${fundoNuvemIMG})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    '@media screen and (max-width: 767px)' : {
        padding: '17.5vw 4vw 11vw 4vw',
    }
})); 