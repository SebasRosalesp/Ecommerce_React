import React,{useState} from "react";





const RegisterForm = ({onRegister})=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const fetchRegister= async ()=>{


        try{
            const response = await fetch('http://localhost:3000/registrar-usuario',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:`fullname=${name}&password=${password}&email=${email}`
            });
            if(response.ok){
                console.log("Usuario registrado con exito");
            }else{
                console.error('Error al registrar Usuario')
            }
        }catch(error){
            console.error(`Error en la solicitud: ${error}`);
        }
    }


    const handleRegister = ()=>{
        if(name && email && password){
            fetchRegister();
            setName('');
            setEmail('');
            setPassword('');
            alert('Registro exitoso');
        }else{
            alert('Por favor complete TODOS los capos');
        }
    };

    return(
        <form className="registro">
            <h2 className="title2">Regístrate</h2>
            <input
            id="name"
            type="text"
            autoComplete="true"
            placeholder="Nombre"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            <input
            id="email"
            type="text"
            autoComplete="true"
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="true"
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button className="button1" onClick={handleRegister}>Registrar</button>
        </form>  
    );
};

export default RegisterForm;