import React, { createContext, useState } from 'react'

export const ShopContext = createContext();

const CartContext = ({ children }) => {

     const Products = [
       {
         id: "001",
         name: "Product 1",
         price: "$19.99",
         image:
           "https://images.unsplash.com/photo-1701067553789-982196c99a1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "002",
         name: "Product 2",
         price: "$29.99",
         image:
           "https://images.unsplash.com/photo-1701067553789-982196c99a1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "003",
         name: "Product 3",
         price: "$14.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "004",
         name: "Product 4",
         price: "$24.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "005",
         name: "Product 5",
         price: "$39.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "006",
         name: "Product 6",
         price: "$9.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "007",
         name: "Product 7",
         price: "$49.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "008",
         name: "Product 8",
         price: "$34.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "009",
         name: "Product 9",
         price: "$27.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "010",
         name: "Product 10",
         price: "$19.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "011",
         name: "Product 11",
         price: "$64.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "012",
         name: "Product 12",
         price: "$44.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "013",
         name: "Product 13",
         price: "$54.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "014",
         name: "Product 14",
         price: "$79.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "015",
         name: "Product 15",
         price: "$29.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "016",
         name: "Product 16",
         price: "$19.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "017",
         name: "Product 17",
         price: "$89.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "018",
         name: "Product 18",
         price: "$49.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "019",
         name: "Product 19",
         price: "$39.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
       {
         id: "020",
         name: "Product 20",
         price: "$24.99",
         image:
           "https://images.unsplash.com/photo-1701067553926-e2a3f472e367?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       },
     ];

     const [product] = useState(Products);

    const [cart, setCart] = useState([])

  return (
    <ShopContext.Provider value={{ cart, setCart, product }}>
      {children}
    </ShopContext.Provider>
  );
};

export default CartContext;

