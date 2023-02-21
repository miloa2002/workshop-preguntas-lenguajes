import React from 'react'
import "./Pregunta.css"
import IMGicon from "../../assets/iconmniño.png"



const Pregunta = () => {
    return (
        <div className='pregunta_container'>
            <img className='icon_avatar' src={IMGicon} alt="" />
            <p>¿Que etiqueta es semanticamente correcta para el contenido principal?</p>

        </div>
    )
}

export default Pregunta