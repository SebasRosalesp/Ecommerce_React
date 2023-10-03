import React from "react";
import './Footer.css'


const Footer = ()=>{

    return(
        <div className="footer">
            <ul className="aboutFoot">
                <li>Acerca de nosotros:</li>
                <li>Mision y vision</li>
                <li>Historia</li>
            </ul>
            <ul className="ContactFoot">
                <li>Contacto</li>
                <li>Email</li>
                <li>Redes Sociales</li>
            </ul>
            <p>Creado por:</p>
        </div>
    );
}

export default Footer;