import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './components/Rotas';
import { ThemeProvider } from "@mui/material";
import { temaPadrao } from "./temas/Tema";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/configureStore"
import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate persistor={ persistor } loading={null}>
        <ThemeProvider theme={temaPadrao}>
          <Rotas/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);