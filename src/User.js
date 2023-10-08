import React,{useContext} from 'react';
import { ThemeContext } from './componentes/Context/ThemeContext';


const User = () => {

    const {contextData} = useContext(ThemeContext);

  if(!contextData){
    return(
        <div>
            <p>Bienvenido</p>
        </div>
    )
  }else{
    return (
        <div>
            <p>Bienvenido {contextData}</p>
        </div>
      )
  }
}

export default User;