import reloj from "../../assets/reloj.png"
import chat from "../../assets/burbuja-de-chat.png"
import "../../styles/Estadisticas.css"

const ValoresEstadisticas = () => {
    return (
        <div className="contenedor-valores">
            <div className='valor-flex'>
                <img src={reloj} alt="reloj" width="30" />
                <p>Tiempo de estudio (horas)</p>
                <p>1</p>
            </div>
            <div className='valor-flex'>
                <img src={chat} alt="reloj" width="30" />
                <p>Respuestas contestadas</p>
                <p>40</p>
            </div>
            <div className='valor-flex'>
                <img src={chat} alt="reloj" width="30" />
                <p>Respuestas correctas</p>
                <p className="valor-correcta">20</p>
            </div>
            <div className='valor-flex'>
                <img src={chat} alt="reloj" width="30" />
                <p>Respuestas incorrectas</p>
                <p className="valor-incorrecto">20</p>
            </div>
        </div>
    )
}

export default ValoresEstadisticas
