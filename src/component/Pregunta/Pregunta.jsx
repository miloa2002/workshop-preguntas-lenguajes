import React from 'react'
import "./Pregunta.css"
import IMGicon from "../../assets/iconmniño.png"



const Pregunta = ({ pregunta }) => {
    return (
        <div className='pregunta_container'>
            <img className='icon_avatar' src={IMGicon} alt="" />
            <p>{pregunta}</p>

        </div>
    )
}

export default Pregunta