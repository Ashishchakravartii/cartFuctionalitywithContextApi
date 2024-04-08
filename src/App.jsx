import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CartContext  from "./context";

const App = () => {
  return (
    <CartContext>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="cart" Component={Cart} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext>
  );
};

export default App;
