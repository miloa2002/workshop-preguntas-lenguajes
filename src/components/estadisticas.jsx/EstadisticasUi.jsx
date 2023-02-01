import React from 'react'
import FooterUi from '../Home/FooterUi'
import ValoresEstadisticas from './ValoresEstadisticas'

const EstadisticasUi = () => {
    return (
        <div>
            <h2 className="estadisticas-title">Estadisticas</h2>
            <ValoresEstadisticas />
            <FooterUi />
        </div>
    )
}

export default EstadisticasUi
