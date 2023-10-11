import React, { Component } from "react";

class OfertaCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      productos: [],
    };
  }

  componentDidMount() {
    this.fetchProductos();
    this.startCarousel();
  }

  componentWillUnmount() {
    this.stopCarousel();
  }

  fetchProductos = async () => {
    try {
      const response = await fetch("http://localhost:3000/listar-productos");

      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa.");
      }

      const data = await response.json();

      // Filtrar los productos que están en oferta (oferta === true)
      const productosOferta = data.filter(
        (producto) => producto.oferta === true
      );

      this.setState({ productos: productosOferta });
    } catch (error) {
      console.error("Error al obtener la lista de productos:", error);
    }
  };

  startCarousel = () => {
    this.timer = setInterval(this.goToNextSlide, 5000);
  };

  stopCarousel = () => {
    clearInterval(this.timer);
  };

  goToNextSlide = () => {
    const { currentIndex, productos } = this.state;
    const newIndex = (currentIndex + 1) % productos.length;
    this.setState({ currentIndex: newIndex });
  };

  goToSlide = (index) => {
    this.setState({ currentIndex: index });
    this.stopCarousel()
    setTimeout(() => {
      this.startCarousel();
    }, 10);
  };

  render() {
    const { currentIndex, productos, open } = this.state;
    const currentProduct = productos[currentIndex];

    return (
      <div className="carousel">
        <div className="carousel-content one">
        <button className="openBtn"
                    onClick={()=>{
                      if(!open){
                        this.setState ({open: true})
                      }else{
                        this.setState ({open: false})
                      }}} >
            </button>
          <div className="carousel-image">
            <img
              src={currentProduct ? currentProduct.imagen : ""}
              alt={currentProduct ? currentProduct.nombre : ""}
            />
          <div className="relleno">
          <div className={open?"carousel-info twoShow" : "carousel-info two"}>
          {currentProduct && (
            <>
              <div id="Card" className="CardCarousel" key={currentProduct.id}>
                <h1 className="nombreCarousel">{currentProduct.name}</h1>
                <p className="precioCarousel">Precio: ${currentProduct.price}</p>
                <div className="info2">
                  <p className="categoria">Categoría: {currentProduct.type}</p>
                  <p className="material">Material: {currentProduct.material}</p>
                  <p className="descripcion">Descripción: {currentProduct.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
          </div>
       
          </div>
          <div className="carousel-buttons">
            {productos.map((producto, index) => (
              <button
                key={index}
                className={`carousel-button ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => this.goToSlide(index)}
              >
                {/*{index + 1}*/}
              </button>
            ))}
          </div>
        </div>
        
      </div>
    );
  }
}

export default OfertaCarousel;
