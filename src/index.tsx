import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './components/Rotas';
import { ThemeProvider } from "@mui/material";
import { temaPadrao } from "./temas/Tema";
import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={temaPadrao}>
      <Rotas/>
    </ThemeProvider>
  </React.StrictMode>
);