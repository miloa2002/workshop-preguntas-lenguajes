import React from 'react'
import "./PaginaPerfil.css"

import avatar from "../../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg"

const PaginaPerfil = () => {
    return (
        <div className='container'>
            <h2>Perfil</h2>

            <div className='cerrar-sesion-container'>
                <div className='img_container'>
                    <img className='img_avatar' src={avatar} alt="" />

                </div>                <p className='nombre'>Francisco Javier</p>
                <p className='email'>francisco.javier@gmail.com</p>
                <button className='btn_close-sesion'>Cerrar sesión</button>

            </div>


        </div>
    )
}

export default PaginaPerfil
