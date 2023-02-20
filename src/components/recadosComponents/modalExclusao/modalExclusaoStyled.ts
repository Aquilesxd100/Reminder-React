import { styled } from "@mui/material";
export const FundoModal = styled('div')(() => ({
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
export const MsgExclusao = styled('div')(() => ({
    border: '4px solid #75B6F8',
    backgroundColor: '#D2E8F3',
    width: '80%',
    textAlign: 'center',
    padding: '15px 8px',
    borderRadius: '13px',
    margin: '10px 0',
    '& h2' : {
        color: '#72D1E2',
        marginBottom: '20px',
        '@media screen and (max-width: 767px)' : {
            fontSize: 'calc(20px + 1.8vw)',
            marginBottom: '10px',
        }
    },
    '& span.destaque' : {
        color: '#FF2F2F',
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
    }
}));