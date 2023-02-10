
import UsePreguntas from "../../hook/UsePreguntas"
import { Link } from "react-router-dom"
import CATEGORIES from "../../constants/categories"
import { useState } from "react"
import VentanaGeneral from "../../component/VentanaGeneral/VentanaGeneral"


const IconsUi = () => {
    const { preguntasHTML, preguntasCSS } = UsePreguntas();
    const [categoryes, setCategoryes] = useState(null)
    const [questions, setQuestions] = useState([]);
    // console.log(preguntasHTML);


    return (

        <div className='contenedor-icons'>
            {
                Object.values(CATEGORIES).map((e, i) => (

                    <Link value={e.name} to={`/quiz/${e.name}`} key={i}>
                        <img className="icon-home" src={e.icon} alt={e.name} />
                        <p>{e.name}</p>
                    </Link>


                ))
            }




        </div >
    )
}

export default IconsUi