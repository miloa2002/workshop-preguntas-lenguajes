import { createContext, useEffect, useState } from "react";
import axios from "axios";

const preguntasContext = createContext();

export const PreguntasProvider = ({ children }) => {

    const [preguntas, setPreguntas] = useState([])

    const obtenerData = async () => {
        try {
            const data = await axios.get("http://localhost:3000/preguntas")
            setPreguntas(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerData();
    }, [])

    return (
        <preguntasContext.Provider value={{ preguntas }}>
            {children}
        </preguntasContext.Provider>
    )
}

export default preguntasContext