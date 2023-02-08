import { createTheme } from "@mui/material/styles";
export const temaPadrao = createTheme ({
    typography: {
        h5: { fontFamily: "hobo", textAlign: "center", color: '#84C1FF', textShadow: '1.5px 0 0 rgb(0, 0, 0), -1.5px 0 0 rgb(0, 0, 0), 0 1.5px 0 rgb(0, 0, 0),  0 -1.5px 0 rgb(0, 0, 0),  0 0 1.5px rgb(0, 0, 0)', letterSpacing: '1px' },
        h4: { fontFamily: "comic-b", textShadow: '1.5px 0 0 rgb(0, 0, 0), -1.5px 0 0 rgb(0, 0, 0), 0 1.5px 0 rgb(0, 0, 0),  0 -1.5px 0 rgb(0, 0, 0),  0 0 1.5px rgb(0, 0, 0);', color: '#72D1E2', margin: '6px 0' },
    },
});