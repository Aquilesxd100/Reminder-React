import { styled, Grid } from "@mui/material";
export const DivLogo = styled(Grid)(() => ({
    justifyContent: "center",
    '@media screen and (max-width: 800px)': {
        display: 'none'
    }
}))
export const Logo = styled('img')(() => ({
    width: '55%',
    minWidth: '300px'
}));
