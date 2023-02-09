import { Grid, styled } from "@mui/material";
export const Formulario = styled(Grid)(() => ({
    height: '80%',
    minHeight: '520px',
    display: 'flex',
    alignItems: 'center',
    '@media screen and (max-width: 800px)': {
        display: 'flex',
        alignItems: 'center',
        minHeight: '80%',
        height: 'inherit',
        padding: '10px 0'
    }
}));