import React from "react";
import "./Cart.css"

const Cart = ({ cartItems , handleAddProducts , handleRemove , handleAdd , handleReduce}) => {
    const list=JSON.parse(localStorage.getItem('setCartItems')) ?? [];
    
    const totalPrice = list.reduce((price,object) => price + object.qty * object.price ,0)

    return ( 
      <div className="cart-items">          
        <div className="cart-items-section">
          <div className="cart-items-header">
            Cart Items
          {list.length === 0 && (
            <div className="cart-items-empty">
               No items are added
            </div>
           )}
          </div>
          <div>
           {list.map((objects) => {
             const {id, name, image ,price,qty} = objects;
             return(
               <div key={id} className="cart-items-list">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <div className="cart-items-button">
                <button onClick= {() => handleReduce( objects ) }>-</button>
                <h4>{qty}</h4>
                <button onClick={() => handleAdd( objects ) }>+</button>
                </div>
                <h4>Rs.{price}</h4>
                <button onClick={() => handleRemove( objects )}>Remove Item</button>
              </div>           
            );
          })}
          <div className="payment">
            <h2>Total Price:{totalPrice}</h2>
            <a href="/payment">Pay Now</a>
          </div>
          </div>    
      </div>
      </div>
     );
}
 
export default Cart;
