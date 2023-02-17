import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import Recados from "../pages/recados/Recados";
function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/recados" element={<Recados />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;