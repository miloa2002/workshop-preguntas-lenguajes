import React, { useState } from 'react'
import UsePreguntas from '../../hook/UsePreguntas';
import "./Respuesta.css"



const Respuesta = ({ options, option, index, answerC, setQuestionIdx, questionIdx }) => {

    const { preguntasHTML, preguntasCSS } = UsePreguntas()

    const [quiz, setQuiz] = useState(false);

    const selectOption = (option) => {
        console.log(option)
        if (answerC === option) {
            alert("correcto")

        } else {
            alert("iconrrecto")
        }
        const nextQ = questionIdx + 1;
        if (nextQ < options.length) {
            setQuestionIdx(questionIdx + 1)

        } else {
            alert("done");
        }
    }

    return (
        <div onClick={() => selectOption(option)} className={`respuesta_container ${quiz ? 'respuesta_container-check' : 'respuesta_container'}`}>
            <p>{option}</p>


            <span onClick={() => setQuiz(!quiz)} className={`radio ${quiz ? ' radio-check' : 'radio'}`}>

            </span>


        </div >
    )
}

export default Respuesta