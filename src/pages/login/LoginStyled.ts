import { Alert, styled } from "@mui/material";
export const AlertSucess = styled(Alert)(() => ({
    position: 'fixed',
    top: '0',
    margin: '10px 0 0 0',
    padding: '3px clamp(calc(50px + 4vw), 6vw, 80px)',
    boxShadow: '2px 2px 1px rgba(0, 0, 0, 0.6)',
    fontSize: 'clamp(12px, 4vw, 27px)',
    zIndex: '1',
    'svg': {
        width: '38px',
        height: '38px'
    },
    '@media screen and (max-width: 800px)' : {
        'svg': {
            width: 'clamp(25px, 5vw, 31px)',
            height: 'clamp(25px, 5.5vw, 39px)'
        },
    }
}));
