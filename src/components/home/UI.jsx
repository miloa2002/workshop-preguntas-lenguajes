import { FooterUi } from "./FooterUi"
import IconsUi from "./IconsUi"

const UI = () => {
    return (
        <div className="container">
            <h1 className="home-title">Practica tus conocimientos en la categoría que prefieras</h1>
            <IconsUi />
            <FooterUi />
        </div>
    )
}

export default UI