import { Box, styled } from "@mui/material";
import fundoFooter from "../../images/footer.jpg";
export const FooterDiv = styled(Box)(() => ({
    position: 'fixed',
    width: '100%',
    bottom: 0,
    padding: 'clamp(3px, 1vh, 10px) 0',
    backgroundImage: `url(${fundoFooter})`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'contain',
    borderTop: '5px solid #007FFF',
    '& h5': {
        fontSize: 'clamp(10px, 2vw, 5vh)',
    },
    '@media screen and (max-width: 800px)': {
        display: 'none'
    }
}));