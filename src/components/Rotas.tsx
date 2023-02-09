import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;