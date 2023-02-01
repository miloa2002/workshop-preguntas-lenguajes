import { createContext } from "react";

const preguntasContext = createContext();

export const PreguntasProvider = ({ children }) => {

    let hola = console.log("hola");

    return (
        <preguntasContext.Provider value={{ hola }}>
            {children}
        </preguntasContext.Provider>
    )
}

export default preguntasContext