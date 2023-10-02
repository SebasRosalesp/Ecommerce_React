import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    
    return(
        <div className="navbar">
            <ul>
                <li><Link to="Inicio">Inicio</Link></li>
                <li><Link to="Productos">Productos</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;