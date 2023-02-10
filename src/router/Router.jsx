import { BrowserRouter, Routes, Route } from "react-router-dom";
import VentanaGeneral from "../component/VentanaGeneral/VentanaGeneral";
import Estadisticas from "../pages/Estadisticas";
import Home from "../pages/Home";
import PaginaPerfil from "../pages/PaginaPerfil/PaginaPerfil";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="/estadisticas" element={<Estadisticas />} />
                    <Route path="/perfil" element={<PaginaPerfil />} />
                    <Route path="/quiz/:categoria" element={<VentanaGeneral />} />
                    {/* <Route path="/quiz/:css" element={<VentanaGeneral />} />
                    <Route path="/quiz/js" element={<VentanaGeneral />} />
                    <Route path="/quiz/figma" element={<VentanaGeneral />} />
                    <Route path="/quiz/ux" element={<VentanaGeneral />} /> */}
                    //ruta del perfil
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router