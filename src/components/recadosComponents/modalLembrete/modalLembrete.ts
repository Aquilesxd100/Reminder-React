import { styled } from "@mui/material";
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
    color: '#F0F2FB',
    textShadow: '1.5px 0 0 rgb(0 0 0), -1.5px 0 0 rgb(0 0 0), 0 1.5px 0 rgb(0 0 0), 0 -1.5px 0 rgb(0 0 0), 0 0 1.5px rgb(0 0 0)',
    fontFamily: 'comic',
    fontWeight: 'lighter',
    fontSize: 'calc(1px + 1.4vw)',
    '& tr' : {
        backgroundImage: `url(${fundoLembretesIMG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
}));
export const ThAcao = styled('th')(() => ({
    maxWidth: '39%',
    border: 'solid #859CDF 4px',
    padding: '5px 10px',
}));
export const LabelAcao = styled('label')(() => ({
    fontSize: 'calc(3px + 1.4vw)',
    fontFamily: 'comic-b',
    color: '#BAC7ED',
    display: 'inline-block',
    marginBottom: '3px',
}));
export const InputAcao = styled('input')(() => ({
    display: 'inline-block',
    width: '80%',
    fontFamily: 'comic',
    fontSize: 'calc(3px + 1.4vw)',
    textTransform: 'lowercase',
}));
export const a = styled('table')(() => ({

}));
export const dda = styled('table')(() => ({

}));
