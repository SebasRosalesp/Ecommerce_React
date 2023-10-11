import React, {useState, useEffect} from "react";
import { useCart } from "react-use-cart";
import './List.css'



const List = () =>{
//dejar el use state en [] para evitar error en el .map
    const [list, setList] = useState([]);
    const [agregado, setAgregado]= useState(false);

    const { addItem } = useCart();


    useEffect(()=>{
        const fetchList = async ()=>{
            const response = await fetch('http://localhost:3000/listar-productos');
            const data = await response.json();
            setList(data);
        }

        fetchList();
    },[]);



    return(
        <div className="listContainer" key={list}>
            <p className={(!agregado ? 'pop' : 'showPop')}>Agregado con éxito</p>
            {list.map((producto) => {
                const product =
                    {
                      id: producto.name,
                      name: producto.name,
                      price: producto.price,
                      imagen: producto.imagen,
                    };
                return(
                    <>
                    <div id="Card" className="Card" key={producto.id}>
                        <img src={producto.imagen} alt={producto.name} key={producto.imagen}/>
                        <h1 key={producto.name}>{producto.name}</h1>
                        <span key={producto.price}>Precio:{producto.price}</span>
                        <span key={producto.type}>Categoría{producto.type}</span>
                        <span key={producto.material}>Material: {producto.material}</span>
                        <span key={producto.description}>Descripción: {producto.description}</span>
                        <button className="addToCart" onClick={()=>{
                            addItem(product);
                            setAgregado(true);
                            setTimeout(() => {
                                setAgregado(false)
                            }, 3000);
                            }}>+ Carrito</button>
                    </div>
                    </>
                );
            })}
        </div>
    )
}

export default List;