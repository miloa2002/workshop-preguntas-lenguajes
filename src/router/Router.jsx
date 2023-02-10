import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estadisticas from "../pages/Estadisticas";
import Home from "../pages/Home";
import PaginaPerfil from "../pages/PaginaPerfil/PaginaPerfil";
import VentanaGeneral from "../component/VentanaGeneral/VentanaGeneral";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="/estadisticas" element={<Estadisticas />} />
                    <Route path="/perfil" element={<PaginaPerfil />} />
                    <Route path="/preguntas" element={<VentanaGeneral />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router