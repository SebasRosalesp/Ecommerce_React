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
        <div className="Registro">
            <h2>Registro</h2>
            <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Registrar</button>
        </div>  
    );
};

export default RegisterForm;