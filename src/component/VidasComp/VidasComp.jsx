import React from 'react'
import "./VidasComp.css"
import { BsSuitHeartFill } from "react-icons/bs";

const VidasComp = () => {
    return (
        <>
            <div className='contenedor__vidas'>
                <div className='barra_container'>

                </div>
                <div className='vidas_icons'>
                    <BsSuitHeartFill className='corazon__icon' />

                </div>
                <span>4</span>

            </div>


        </>
    )
}

export default VidasComp
