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
    const { currentIndex, productos } = this.state;
    const currentProduct = productos[currentIndex];

    return (
      <div className="carousel">
        <div className="carousel-content one">
          <div className="carousel-image">
            <img
              src={currentProduct ? currentProduct.imagen : ""}
              alt={currentProduct ? currentProduct.nombre : ""}
            />
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
        <div className="carousel-info two">
          {currentProduct && (
            <>
              <div id="Card" className="Card" key={currentProduct.id}>
                <h1>{currentProduct.name}</h1>
                <p>Precio: ${currentProduct.price}</p>
                <p>Categoría: {currentProduct.type}</p>
                <p>Material: {currentProduct.material}</p>
                <p>Descripción: {currentProduct.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default OfertaCarousel;
