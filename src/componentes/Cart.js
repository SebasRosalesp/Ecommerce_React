import { useCart } from "react-use-cart";


const Cart = ({nav})=>{

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();

      if (isEmpty) return <p>Your cart is empty</p>;

      if(!nav){
        return (
            <>
              <h1>Cart ({totalUniqueItems})</h1>
        
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <img  alt='Imagen del producto' src={item.imagen}></img>
                    {item.quantity} x {item.name} &mdash;
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button onClick={() => removeItem(item.id)}>&times;</button>
                  </li>
                ))}
              </ul>
            </>
          );
      }else{
        return(
            <h1>Cart ({totalUniqueItems})</h1>
        )
      }
    }

export default Cart;
