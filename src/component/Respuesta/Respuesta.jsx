import React, { useState } from 'react'
import "./Respuesta.css"



const Respuesta = () => {

    const [quiz, setQuiz] = useState(false);


    return (
        <div className={`respuesta_container ${quiz ? 'respuesta_container-check' : 'respuesta_container'}`}>
            <p>Main</p>


            <span onClick={() => setQuiz(!quiz)} className={`radio ${quiz ? ' radio-check' : 'radio'}`}>

            </span>


        </div >
    )
}

export default Respuesta