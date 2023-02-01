import { createContext, useEffect, useState } from "react";
import axios from "axios";

const preguntasContext = createContext();

export const PreguntasProvider = ({ children }) => {

    const [preguntasHTML, setPreguntasHTML] = useState([])

    const obtenerData = async () => {
        try {
            const data = await axios.get("http://localhost:3000/html")
            const dat2 = await axios.get("http://localhost:3000/css")
            const dat3 = await axios.get("http://localhost:3000/javascript")
            const dat4 = await axios.get("http://localhost:3000/ux")
            const dat5 = await axios.get("http://localhost:3000/figma")
            console.log(data.data);
            setPreguntasHTML(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerData();
    }, [])

    return (
        <preguntasContext.Provider value={{ preguntasHTML }}>
            {children}
        </preguntasContext.Provider>
    )
}

export default preguntasContext