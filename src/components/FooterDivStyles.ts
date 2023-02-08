import { Box, styled } from "@mui/material";
import fundoFooter from "../images/footer.jpg";
export const FooterDiv = styled(Box)(() => ({
    width: '100%',
    height: '55px',
    backgroundImage: `url(${fundoFooter})`,
}));