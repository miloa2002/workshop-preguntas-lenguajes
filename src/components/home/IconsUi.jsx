import iconHtml from "../../assets/html5.png"
import iconCss from "../../assets/css.png"
import iconJs from "../../assets/js.png"
import iconFigma from "../../assets/figma.png"
import iconUx from "../../assets/ux.png"
import UsePreguntas from "../../hook/UsePreguntas"
import { Link } from "react-router-dom"
import { useState } from "react"

const IconsUi = () => {
    const { preguntasHTML } = UsePreguntas();
    const { preguntasCSS } = UsePreguntas();
    const { preguntasJS } = UsePreguntas();
    const { preguntasFIGMA } = UsePreguntas();
    const { preguntasUX } = UsePreguntas();


    return (
        <div className='contenedor-icons'>
            <div onClick={() => console.log(preguntasHTML)}>
                <img className="icon-home" src={iconHtml} alt="html" />
                <p>Html5</p>
            </div>
            <div className="icon-flex">
                <div onClick={() => console.log(preguntasCSS)}>
                    <img className="icon-home" src={iconCss} alt="css" />
                    <p>Css3</p>
                </div>
                <div onClick={() => console.log(preguntasJS)}>
                    <img className="icon-home" src={iconJs} alt="js" />
                    <p>Js</p>
                </div>
            </div>

            <div className="icon-flex">
                <div onClick={() => console.log(preguntasFIGMA)}>
                    <img className="icon-home" src={iconFigma} alt="figma" />
                    <p>Figma</p>
                </div>
                <div onClick={() => console.log(preguntasUX)}>
                    <img className="icon-home" src={iconUx} alt="ux" />
                    <p>Ux</p>
                </div>
            </div>
        </div>
    )
}

export default IconsUi