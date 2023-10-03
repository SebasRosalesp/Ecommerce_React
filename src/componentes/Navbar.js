import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Navbar = () =>{
    const [navbar, setNavbar] = useState(false);
     
    const changeBackground = () => {
        if(window.scrollY>= 1) {
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return(
        <div className= {navbar ? 'navbar active':'navbar'}>
            <ul>
                <li><Link to="Inicio">Inicio</Link></li>
                <li><Link to="Productos">Productos</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;