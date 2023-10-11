import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import'./NavButton.css'
import Usuario from "./Usuario";
import Cart from "./Cart";



const Navbar = () =>{
    const [hamburger, setHamburger] = useState(false);
    const [button, setButton] = useState(false)
    
    const chancheHamburguer = ()=>{
        if(!hamburger){
            setHamburger(true)
        }else{
            setHamburger(false);
        }
    }

    const changeButton = () =>{
        if(!button){
            setButton(true);
        }else{
            setButton(false)
        }
    }
    const change = () =>{
        chancheHamburguer();
        changeButton();
    }
    return(
        <div className= 'navbar'>
            
            
            <button className='navButton' onClick={change}>
            <div id="nav-icon1" className={button? 'open':''}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
                    
            </button>
            
            <div className={hamburger ? 'showHamburger': 'hamburger'}>
                <ul>
                    <li><Link to="Inicio">Inicio</Link></li>
                    <li><Link to="Productos">Productos</Link></li>
                    <li><Link to ="Registro">Registrate || Inicia sesión</Link></li>
                    <li><Link to="Carrito">Carrito</Link></li>
                    <li><Link to='Contacto'>Contáctenos</Link></li>
                </ul>
                <div className="right">
                    <Usuario inicio={false}/>
                    <Cart nav={true} card={false}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;