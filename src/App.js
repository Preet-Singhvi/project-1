import Navbar from "./Navbar";
import { Route, Router, Switch } from "react-router";
import Sign_in from "./sign-in";
import Password from "./password";
import Forgot from "./forgot";
import Home from "./home-page";
import Cart from "./Cart";
import { useState } from 'react';
import React from 'react';

function App(){
  const [cartItems,setCartItems] = useState([])
  
  const handleAddProduct = ( listItem ) => {
    console.log(listItem)   
    const ProductExist = cartItems.find((object) => object.id === listItem.id)
    let qty = 1;
    if(ProductExist){
      setCartItems(cartItems.map((object) => object.id === listItem.id ?
      {...ProductExist, qty: ProductExist.qty + 1}: object),
      localStorage.setItem('setCartItems',JSON.stringify(cartItems))             
      );
    }  else{
      setCartItems([...cartItems,{...listItem,qty:1} ]),
        localStorage.setItem('setCartItems',JSON.stringify(cartItems))
    }
    console.log(cartItems)
  };

  return ( 
    <Switch>
        <Route exact path="/">
          <Sign_in />
        </Route>
        <Route path="/sign-up">
          <Navbar />
        </Route>
        <Route path="/password">
          <Password />
        </Route>
        <Route path="/forgot-password">
          <Home handleAddProduct= { handleAddProduct }/>
        </Route>
        <Route path="/cart">
          <Cart cartItems={ cartItems } handleAddProduct= { handleAddProduct }/>
        </Route>
       </Switch>
    
    );
}
 
export default App;
