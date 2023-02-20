import { createTheme } from "@mui/material/styles";
export const temaPadrao = createTheme ({
    typography: {
        h5: { fontFamily: "hobo", textAlign: "center", color: '#84C1FF', textShadow: '1.5px 0 0 rgb(0, 0, 0), -1.5px 0 0 rgb(0, 0, 0), 0 1.5px 0 rgb(0, 0, 0),  0 -1.5px 0 rgb(0, 0, 0),  0 0 1.5px rgb(0, 0, 0)', letterSpacing: '1px' },
        h2: { fontFamily: 'comic-b', fontSize: 'calc(23px + 1.5vw)', color: '#88c1f9', textShadow: '1.5px 0 0 rgb(0 0 0), -1.5px 0 0 rgb(0 0 0), 0 1.5px 0 rgb(0 0 0), 0 -1.5px 0 rgb(0 0 0), 0 0 1.5px rgb(0 0 0)', '@media screen and (max-width: 767px)' : {
        fontSize: 'calc(15px + 1.8vw)'},},
        h3: { fontFamily: "comic", textShadow: '1.3px 0 0 rgb(0 0 0), -1.3px 0 0 rgb(0 0 0), 0 1.3px 0 rgb(0 0 0), 0 -1.3px 0 rgb(0 0 0), 0 0 1.3px rgb(0 0 0)', color: '#79BCFF', fontSize: 'calc(10px + 1vw)', margin: '5px 5px 5px 5px',
        letterSpacing: '0.5px', '@media screen and (max-width: 767px)' : {
        textShadow: '1.2px 0 0 rgb(0 0 0), -1.2px 0 0 rgb(0 0 0), 0 1.2px 0 rgb(0 0 0), 0 -1.2px 0 rgb(0 0 0), 0 0 1.2px rgb(0 0 0)',
        fontSize: 'calc(16px + 1vw)'
        } },
        h4: { fontFamily: "comic-b", textShadow: '1.5px 0 0 rgb(0, 0, 0), -1.5px 0 0 rgb(0, 0, 0), 0 1.5px 0 rgb(0, 0, 0),  0 -1.5px 0 rgb(0, 0, 0),  0 0 1.5px rgb(0, 0, 0)', color: '#72D1E2', margin: '6px 0' },
        subtitle1: { fontFamily: "comic", color: "#00FFFF", cursor: 'pointer',     textShadow: '1.1px 0 0 rgb(0, 0, 0), -1.1px 0 0 rgb(0, 0, 0), 0 1.1px 0 rgb(0, 0, 0),  0 -1.1px 0 rgb(0, 0, 0),  0 0 1.1px rgb(0, 0, 0)', textUnderlinePosition: 'under', textDecoration: 'underline', fontSize: 'calc(7px + 1vw)', '@media screen and (max-width: 800px)': { fontSize: 'calc(10px + 1vw)' }},
        subtitle2: { fontSize: 'calc(11px + 1vw)', color: '#FFFFFF', letterSpacing: '0.5px', fontFamily: 'comic-b', textAlign: 'center', textShadow: '1.5px 0 0 rgb(0 0 0), -1.5px 0 0 rgb(0 0 0), 0 1.5px 0 rgb(0 0 0), 0 -1.5px 0 rgb(0 0 0), 0 0 1.5px rgb(0 0 0)' }
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