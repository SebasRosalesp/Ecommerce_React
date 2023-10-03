import React, {useState, useEffect} from "react";
import './List.css'

const List = () =>{
//dejar el use state en [] para evitar error en el .map
    const [list, setList] = useState([]);

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
            {list.map(producto => {
                return(
                    <div id="Card" className="Card" key={producto.id}>
                        <img src={producto.imagen} alt={producto.name}/>
                        <h1>{producto.name}</h1>
                        <span>Precio:{producto.price}</span>
                        <span>Categoría{producto.type}</span>
                        <span>Material: {producto.material}</span>
                        <span>Descripción: {producto.description}</span>
                    </div>
                );
            })}
        </div>
    )
}

export default List;