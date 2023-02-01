import { useContext } from "react";
import preguntasContext from "../context/PreguntasProvider";

const UsePreguntas = () => {
    return (
        useContext(preguntasContext)
    )
}

export default UsePreguntas
