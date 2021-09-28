import React from "react";

const Cart = ({cartItems}) => {
    const list=localStorage.getItem('setCartItems')
    JSON.parse(list)
    return ( <div>
        {console.log(cartItems)}
        <div className="cart-items">          
          <div className="cart-items-header">
            Cart Items
          </div>
          {list.length === 0 && (
            <div className="cart-items-empty">
               No items are added
            </div>
           )}
           <div>
            

           {list.map((product) => {
             const {id, name, image ,price} = product;
            <h1>ujcvtfu</h1>
            console.log(product)
            return(
              <article key={product.id} className="cart-items-list">
               
                <img src={image} alt={name} />
              </article>
            
            );
          })}
      </div>
    </div>
          </div>
     );
}
 
export default Cart;
