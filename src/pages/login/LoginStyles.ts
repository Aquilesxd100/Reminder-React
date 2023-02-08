import { Grid, styled } from "@mui/material";
import fundoForm from "../../images/index.png";
export const Formulario = styled(Grid)(() => ({
    height: '80%',
    backgroundImage: `url(${fundoForm})`,
    backgroundSize: '80% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}));