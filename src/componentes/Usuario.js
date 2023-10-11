import React, {useContext} from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Link } from "react-router-dom";

const Usuario = ({inicio})=>{
    const {contextData} = useContext(ThemeContext);

    if(!inicio){
        

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
                <li><Link to ="Registro">Registrese por favor</Link></li>
            </div>
        )

    }
    }else{
        return(<p>{contextData.fullname}</p>)
    };
}

export default Usuario;