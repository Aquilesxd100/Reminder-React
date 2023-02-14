import { Box, styled } from "@mui/material";
import fundoFooter from "../images/footer.jpg";
export const FooterDiv = styled(Box)(() => ({
    position: 'fixed',
    width: '100%',
    bottom: 0,
    padding: '10px 0',
    backgroundImage: `url(${fundoFooter})`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'contain',
    borderTop: '5px solid #007FFF',
    '& h5': {
        fontSize: 'calc(10px + 1.4vw)',
    },
    '@media screen and (max-width: 800px)': {
        display: 'none'
    }
}));