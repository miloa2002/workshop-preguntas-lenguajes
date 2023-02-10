import { createContext, useEffect, useState } from "react";
import axios from "axios";

const preguntasContext = createContext();

export const PreguntasProvider = ({ children }) => {

    const [preguntasHTML, setPreguntasHTML] = useState([])
    const [preguntasCSS, setPreguntasCSS] = useState([])
    const [preguntasJS, setPreguntasJS] = useState([])
    const [preguntasFIGMA, setPreguntasFIGMA] = useState([])
    const [preguntasUX, setPreguntasUX] = useState([])

    const obtenerData = async () => {
        try {
            const dataHTML = await axios.get("https://my-json-server.typicode.com/arios968/api-preguntas/questionHTML")
            setPreguntasHTML(dataHTML.data);

            const dataCSS = await axios.get("https://my-json-server.typicode.com/arios968/api-preguntas/questioncss")
            setPreguntasCSS(dataCSS.data);

            const dataJS = await axios.get("https://my-json-server.typicode.com/arios968/api-preguntas/questionJS")
            setPreguntasJS(dataJS.data);

            const dataFIGMA = await axios.get("https://my-json-server.typicode.com/arios968/api-preguntas/questionFigma")
            setPreguntasFIGMA(dataFIGMA.data);

            const dataUX = await axios.get("https://my-json-server.typicode.com/arios968/api-preguntas/questionUX")
            setPreguntasUX(dataUX.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerData();
    }, [])

    return (
        <preguntasContext.Provider value={{ preguntasHTML, preguntasCSS, preguntasJS, preguntasFIGMA, preguntasUX }}>
            {children}
        </preguntasContext.Provider>
    )
}

export default preguntasContext