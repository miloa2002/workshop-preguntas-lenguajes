import { createContext, useEffect, useState } from "react";
import axios from "axios";

const preguntasContext = createContext();

export const PreguntasProvider = ({ children }) => {

    const [preguntasHTML, setPreguntasHTML] = useState([])
    const [preguntasCSS, setPreguntasCSS] = useState([]);
    const [preguntasJS, setPreguntasJS] = useState([]);
    const [preguntasFull, setPreguntasFull] = useState([])

    const obtenerData = async () => {
        try {
            const data = await axios.get("http://localhost:3001/questionHTML")
            const dat2 = await axios.get("http://localhost:3001/questionsCSS")
            const dat3 = await axios.get("http://localhost:3001/questionsJS")
            // const dat4 = await axios.get("http://localhost:3000/ux")
            // const dat5 = await axios.get("http://localhost:3000/figma")
            setPreguntasHTML(data.data);
            setPreguntasCSS(dat2.data);
            setPreguntasJS(dat3.data)


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerData();
    }, [])

    return (
        <preguntasContext.Provider value={{ preguntasHTML, preguntasCSS, preguntasJS }}>
            {children}
        </preguntasContext.Provider>
    )
}

export default preguntasContext