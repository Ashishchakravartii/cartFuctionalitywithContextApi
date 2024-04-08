import React, { useContext } from 'react'
import SingleProd from './SingleProd'
import { ShopContext } from '../context'

const Cart = () => {

  const { cart } = useContext(ShopContext);
  console.log("from cart page", cart);

  return (
    // 

    <div className='prodBox' >
      {cart.map((prod)=>(
        <SingleProd prod={prod} />
      ))}

    </div>
  )
}

export default Cart