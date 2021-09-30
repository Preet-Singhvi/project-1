import Register from "./Navbar";
import { Route, Switch } from "react-router";
import Sign_in from "./sign-in";
import Password from "./password";
import Forgot from "./forgot";
import Home from "./home-page";
import Cart from "./Cart";
import React from 'react';
import { useEffect } from "react";

function App(){
  const cartItems = JSON.parse(localStorage.getItem("setCartItems")) ?? [];

  useEffect(() => {
    console.log("hi")
  },[cartItems])
  
  function arrayRemove(arr,value){
    return arr.filter(function(object){
      return object.id !== value.id
    })
  }

  const handleAddProduct = ( listItem ) => {
      const ProductExist = cartItems.find((product) => product.id === listItem.id)
      if(ProductExist){
        cartItems.map((product) => 
        product.id === listItem.id ?(product.qty += 1): product
        );
        localStorage.setItem('setCartItems',JSON.stringify(cartItems))
      }  else{
         listItem["qty"] = 1;
         cartItems.push(listItem);
         localStorage.setItem('setCartItems',JSON.stringify(cartItems)) 
        }
  };

  const handleRemove = (objects) => {
     arrayRemove(cartItems,objects)
     localStorage.setItem('setCartItems',JSON.stringify(cartItems))
  }

  const handleAdd = (objects) => {
     cartItems.map((product) => 
        product.id === objects.id ?(product.qty += 1): product
        );
        localStorage.setItem('setCartItems',JSON.stringify(cartItems))
  }

  const handleReduce = (objects) => {
      if(objects.qty === 1){
        cartItems.filter((object) => object.id !== objects.id)
        localStorage.setItem('setCartItems',JSON.stringify(cartItems)) } 
      else{
        cartItems.map((product) => 
        product.id === objects.id ?(product.qty -= 1): product
        );
        localStorage.setItem('setCartItems',JSON.stringify(cartItems))
      }  
  }

  return ( 
    <Switch>
        <Route exact path="/">
          <Sign_in />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/password">
          <Password />
        </Route>
        <Route exact path="/forgot-password">
          <Home handleAddProduct= { handleAddProduct }/>
        </Route>
        <Route path="/cart">
          <Cart 
          cartItems={ cartItems } 
          handleAddProducts= { handleAddProduct } 
          handleRemove = { handleRemove }
          handleAdd = { handleAdd } 
          handleReduce = { handleReduce }/>
        </Route>
       </Switch>
    
    );
}
 
export default App;
