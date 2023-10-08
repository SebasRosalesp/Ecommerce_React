import React, {useContext} from "react";
import { ThemeContext } from "./Context/ThemeContext";

const Usuario = ()=>{
    const {contextData} = useContext(ThemeContext);

    if(contextData !== ''){
        return(
            <div className="userContainer">
                <img src="https://img.freepik.com/vector-premium/gary-avatar-genero-ilustracion-vectorial_276184-164.jpg" alt='foto de perfil'/>
                <p>{contextData.fullname}</p>
            </div>
        )
    }else{
        return(
            <div className="userContainer">
                <img src="https://img.freepik.com/vector-premium/gary-avatar-genero-ilustracion-vectorial_276184-164.jpg" alt='foto de perfil'/>
                <p>Registrese por favor</p>
            </div>
        )

    }
}

export default Usuario;