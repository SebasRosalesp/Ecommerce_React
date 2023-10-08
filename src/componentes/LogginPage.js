import React, {useContext, useEffect, useState} from "react";
import RegisterForm from "./RegisterForm";
import { ThemeContext } from "./Context/ThemeContext";




const LogginPage = ()=>{
    const [usuarios, setUsuarios] = useState([]);
    const[users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {contextData, setContextData} = useContext(ThemeContext);
    const [loggedIn, setLoggedIn] = useState(contextData?true:false);
    
    

    useEffect(()=>{
        
        const listarUsuarios = async ()=>{
            const response = await fetch('http://localhost:3000/listar-usuarios');
            const data = await response.json();
            setUsuarios(data);
            console.log(usuarios);
            
        }
    
        listarUsuarios();
    },[]);


    const handleRegister = (newUser) =>(
        setUsers ([...users, newUser])
        
    );
    

    const handleLogin = () =>{
        
        usuarios.map(usuario=>{
            const valEmail = (usuario.email === email && usuario.password === password? true : false );
                
            if(valEmail){
                setLoggedIn(true);
                setContextData(usuario);
            }
            });
        
        
    };
    
    return(
        <div className="Loggin">
            {
                loggedIn ?(
                    <h2>Bienvenido {contextData.fullname}</h2>
                ) : (
                    <>
                        <h2>Iniciar Sesion</h2>
                        <input
                            className="email1"
                            autoComplete="true"
                            type="email"
                            placeholder="Correo Electronico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        <input
                            className="password1"
                            type="password"
                            placeholder="Clave de acceso"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <button className="button1" onClick={handleLogin} >Iniciar</button>
                        <div className="Divisor"></div>
                        <RegisterForm onRegister={handleRegister}/>
                    </>)
            }
        </div>
    );
};

export default LogginPage;