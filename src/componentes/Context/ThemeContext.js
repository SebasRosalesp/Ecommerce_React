import {createContext, useState} from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider(props){
    const [contextData, setContextData] = useState('');
    const valor = {contextData, setContextData};


    return(
        <ThemeContext.Provider value={valor}>
            {props.children}
        </ThemeContext.Provider> 
    )
}