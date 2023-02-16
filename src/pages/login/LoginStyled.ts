import { Alert, styled } from "@mui/material";
export const AlertCustom = styled(Alert)(() => ({
    position: 'fixed',
    top: '-80px',
    margin: '10px 0 0 0',
    padding: '3px calc(50px + 6vw) 3px calc(50px + 6vw)',
    boxShadow: '2px 2px 1px rgba(0, 0, 0, 0.6)',
    fontSize: 'clamp(12px, 4vw, 27px)',
    zIndex: '1',
    opacity: '1',
    transition: 'top 0.6s ease-out, opacity 0.45s',
    'svg': {
        width: '38px',
        height: '38px'
    },
    '@media screen and (max-width: 800px)' : {
        padding: '3px calc(10px + 6vw) 3px calc(10px + 6vw)',
        'svg': {
            width: 'clamp(19px, 5vw, 31px)',
            height: 'clamp(19px, 5.5vw, 39px)'
        },
    }
}));
