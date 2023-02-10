import React, { useState, useEffect } from 'react'
import BtnComprobar from '../BtnComprobar'
import ListaRespuestas from '../ListaRespuestas'
import Pregunta from '../Pregunta'
import VidasComp from '../VidasComp/VidasComp'
import "./VentanaGeneral.css"
import UsePreguntas from '../../hook/UsePreguntas'
import { useParams } from 'react-router-dom'


const VentanaGeneral = () => {
    const { preguntasHTML, preguntasCSS, preguntasJS } = UsePreguntas()

    const [questionIdx, setQuestionIdx] = useState(0);
    const params = useParams();
    // const [currQuestion, setCurrQuestion] = useState(null);

    let currQuestion;


    if (params.categoria === 'HTML5') {
        currQuestion = preguntasHTML[questionIdx]
    } else if (params.categoria === 'CSS3') {
        currQuestion = preguntasCSS[questionIdx]

    } else if (params.categoria === 'JS') {
        currQuestion = preguntasJS[questionIdx]
    }

    // params.categoria === 'HTML5' ? preguntasHTML[questionIdx] : preguntasCSS[questionIdx]
    // setCurrQuestion(preguntasHTML)
    // console.log(currQuestion);



    // let currQuestion = params.categoria === 'HTML5' ? preguntasHTML[questionIdx] : preguntasCSS[questionIdx]

    // switch (params.categoria) {
    //     case "HTML5": setCurrQuestion(preguntasHTML[questionIdx])

    //         break;
    //     case "CSS3": setCurrQuestion(preguntasCSS[questionIdx])
    //         break
    // }
    // let currQuestion



    // const setPreguntas = async () => {
    //     let html = await preguntasHTML[questionIdx]
    //     let css = await preguntasCSS[questionIdx]

    //     if (params.categoria === 'HTML5') {
    //         // console.log(preguntasHTML);
    //         setCurrQuestion(html)
    //         // currQuestion = preguntasHTML[questionIdx]

    //     } else if (params.categoria === 'CSS3') {
    //         // console.log(preguntasCSS);
    //         setCurrQuestion(css)
    //         // currQuestion = preguntasCSS[questionIdx]
    //     }
    // }
    // useEffect(() => {

    //     setPreguntas()

    // }, [])


    console.log(currQuestion.options);



    return (

        <div className='container'>


            <VidasComp />
            <Pregunta pregunta={currQuestion.question} />
            <ListaRespuestas questionIdx={questionIdx} setQuestionIdx={setQuestionIdx} answerC={currQuestion.answer} options={currQuestion.options} />
            <BtnComprobar />

        </div>


    )
}

export default VentanaGeneral
