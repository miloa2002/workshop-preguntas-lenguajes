import iconHtml from "../../assets/html5.png"
import iconCss from "../../assets/css.png"
import iconJs from "../../assets/js.png"
import iconFigma from "../../assets/figma.png"
import iconUx from "../../assets/ux.png"
import UsePreguntas from "../../hook/UsePreguntas"

const IconsUi = () => {
    const { preguntasHTML } = UsePreguntas();
    return (
        <div className='contenedor-icons'>
            <div onClick={() => console.log(preguntasHTML)}>
                <img className="icon-home" src={iconHtml} alt="html" />
                <p>Html5</p>
            </div>
            <div className="icon-flex">
                <div>
                    <img className="icon-home" src={iconCss} alt="css" />
                    <p>Css3</p>
                </div>
                <div>
                    <img className="icon-home" src={iconJs} alt="js" />
                    <p>Js</p>
                </div>
            </div>

            <div className="icon-flex">
                <div>
                    <img className="icon-home" src={iconFigma} alt="figma" />
                    <p>Figma</p>
                </div>
                <div>
                    <img className="icon-home" src={iconUx} alt="ux" />
                    <p>Ux</p>
                </div>
            </div>
        </div>
    )
}

export default IconsUi