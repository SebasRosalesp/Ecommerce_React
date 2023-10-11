import React from "react";
import Carousel from "./Carousel";
import OfertaCarousel from "./OfertaCarrousel";
import NuevoCarousel from "./NuevoCarousel";


const Inicio = ()=>{
    return(
        <>
            <h2 className="title">Explore nuestros productos</h2>
            <Carousel />
            <h2>Productos en oferta</h2>
            <OfertaCarousel />
            <h2>Productos Nuevos</h2>
            <NuevoCarousel />
        </>)
}

export default Inicio;

