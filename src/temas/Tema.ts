import { createTheme } from "@mui/material/styles";
export const temaPadrao = createTheme ({
    typography: {
        h5: { fontFamily: "hobo", textAlign: "center", color: '#84C1FF', textShadow: '1.5px 0 0 rgb(0, 0, 0), -1.5px 0 0 rgb(0, 0, 0), 0 1.5px 0 rgb(0, 0, 0),  0 -1.5px 0 rgb(0, 0, 0),  0 0 1.5px rgb(0, 0, 0)', letterSpacing: '1px' },
        h4: { fontFamily: "comic-b", textShadow: '1.5px 0 0 rgb(0, 0, 0), -1.5px 0 0 rgb(0, 0, 0), 0 1.5px 0 rgb(0, 0, 0),  0 -1.5px 0 rgb(0, 0, 0),  0 0 1.5px rgb(0, 0, 0);', color: '#72D1E2', margin: '6px 0' },
        subtitle1: { fontFamily: "comic", color: "#00FFFF", cursor: 'pointer',     textShadow: '1.1px 0 0 rgb(0, 0, 0), -1.1px 0 0 rgb(0, 0, 0), 0 1.1px 0 rgb(0, 0, 0),  0 -1.1px 0 rgb(0, 0, 0),  0 0 1.1px rgb(0, 0, 0)', textUnderlinePosition: 'under', textDecoration: 'underline', fontSize: 'calc(7px + 1vw)', '@media screen and (max-width: 800px)': { fontSize: 'calc(10px + 1vw)' }}
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 800.1,
          lg: 1200,
          xl: 1536,
        }
    },
});