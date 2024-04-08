import React, { useContext } from 'react'
import { ShopContext } from '../context';

 const SingleProd = ({prod}) => {

  const {cart, setCart} = useContext(ShopContext)

  return (
    <div className="singleProdBox">
      <img className="prodImg" src={prod.image} alt="" />
      <div>
        <span>{prod.price}</span>
        <span>Description</span>
        <span>
          {" "}
          {prod.name} | {prod.id}{" "}
        </span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="removeCart"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from cart
        </button>
      ) : (
        <button className="addCart" onClick={() => setCart([...cart, prod])}>
          Add to cart
        </button>
      )}
    </div>
  );
}

export default SingleProd