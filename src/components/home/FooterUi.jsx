import iconHome from "../../assets/home-page-svgrepo-com.svg"
import iconEstadisticas from "../../assets/statistics-svgrepo-com.svg"
import iconUser from "../../assets/user-svgrepo-com.svg"

export const FooterUi = () => {
    return (
        <nav className="footer">
            <div className="footer-flex">
                <a href="#" className="hover-icon">
                    <img src={iconHome} alt="icon-home" />
                    <p className="items-footer">Home</p>
                </a>
                <a href="#" className="hover-icon">
                    <img src={iconEstadisticas} alt="icon-home" />
                    <p className="items-footer">Estadisticas</p>
                </a>
                <a href="#" className="hover-icon">
                    <img src={iconUser} alt="icon-home" />
                    <p className="items-footer">Perfil</p>
                </a>
            </div>
        </nav>
    )
}
