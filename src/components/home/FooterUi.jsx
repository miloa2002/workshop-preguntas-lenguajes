import iconHome from "../../assets/home-page-svgrepo-com.svg"
import iconEstadisticas from "../../assets/statistics-svgrepo-com.svg"
import iconUser from "../../assets/user-svgrepo-com.svg"
import { Outlet, Link } from "react-router-dom";

const FooterUi = () => {
    return (
        <>
            <Outlet />
            <nav className="footer">
                <div className="footer-flex">
                    <Link to="/" className="hover-icon">
                        <img src={iconHome} alt="icon-home" />
                        <p className="items-footer">Home</p>
                    </Link>
                    <Link to="/estadisticas" className="hover-icon">
                        <img src={iconEstadisticas} alt="icon-home" />
                        <p className="items-footer">Estadisticas</p>
                    </Link>
                    <Link to="/perfil" className="hover-icon">
                        <img src={iconUser} alt="icon-home" />
                        <p className="items-footer">Perfil</p>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default FooterUi