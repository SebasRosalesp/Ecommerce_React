import {createContext, useState} from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider(props){
    const [contextCart, setContextCart] = useState(false);
    const [contextData, setContextData] = useState('');
    const [counterCart, setConunterCart] = useState(0);


    const valor = {contextData, setContextData, contextCart, setContextCart, counterCart, setConunterCart};

    
    

    return(
        <ThemeContext.Provider value={valor}>
            {props.children}
        </ThemeContext.Provider> 
    )
}