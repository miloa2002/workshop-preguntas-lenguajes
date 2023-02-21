import React from 'react'
import BtnComprobar from '../BtnComprobar'
import ListaRespuestas from '../ListaRespuestas'
import Pregunta from '../Pregunta'
import "./VentanaGeneral.css"
import VidasComp from '../VidasComp/VidasComp'


const VentanaGeneral = () => {

    return (

        <div className='container'>

            <VidasComp />
            <Pregunta />
            <ListaRespuestas />
            <BtnComprobar />

        </div>


    )
}

export default VentanaGeneral
