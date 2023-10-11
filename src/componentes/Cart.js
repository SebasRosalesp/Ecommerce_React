import { useCart } from "react-use-cart";
import {Link} from 'react-router-dom'
import './cart.css'

const Cart = ({nav})=>{

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();

      

      if(!nav){
        if (isEmpty) return (
          <div className="emptyCart">
            <h2 className="title">Carrito</h2>
          <p>Tu carrito está vacío</p>
          </div>
        )
        return (
            <div className="cartContainer">
              <h1 className="title">Cart ({totalUniqueItems})</h1>
        
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <img  alt='Imagen del producto' src={item.imagen}></img>
                    <p>
                    {item.quantity} x {item.name} &mdash;</p>
                    <div className="botonera">
                      <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    className="restar">
                      -
                    </button>
                    <button className="sumar"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button className="eliminar" onClick={() => removeItem(item.id)}>&times;</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
      }else{
        if (isEmpty){ return <Link to="Carrito"><p className="cartNav">Tu carrito está vacío</p></Link>;}
        else{return(
          <Link to="Carrito"> <h1 className="cartNav">Cart ({totalUniqueItems})</h1></Link>
           
        )}
        
      }
    }

export default Cart;
