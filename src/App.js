import React from "react";
import {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCart,setIsCart] = useState(false);
  
  const openCartHandler = () => {
    setIsCart(true);
  };

  const closeCartHandler = () => {
    setIsCart(false);
  };
  return (
    <CartProvider>
      {isCart && <Cart onClick = {closeCartHandler}/>}
      <Header onClick={openCartHandler}/>
        <main>
          <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;
