import { useContext } from "react";
import preguntasContext from "../context/PreguntasProvider";

const UsePreguntas = () => {
    return (
        useContext(preguntasContext)
    )
}

export default UsePreguntas


// 1.importar usePreguntas  2.const{preguntas es el valor} = usePreguntas();
//3.en otro archivo ya se puede mapear ese preguntas