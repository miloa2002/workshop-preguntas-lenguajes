import React from 'react'
import Respuesta from '../Respuesta/Respuesta'
import "./ListaRespuestas.css"
import UsePreguntas from '../../hook/UsePreguntas'


const ListaRespuestas = ({ options, answerC, questionIdx, setQuestionIdx }) => {
    console.log(options);

    return (
        <div className='respuestas_container'>
            {
                options.map((option, i) => (
                    <Respuesta setQuestionIdx={setQuestionIdx} questionIdx={questionIdx} answerC={answerC} key={i} option={option} options={options} index={i} />

                ))
            }






        </div>
    )
}

export default ListaRespuestas