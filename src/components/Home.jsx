import React, { useContext, useState } from 'react'
import SingleProd from './SingleProd';
import { ShopContext } from '../context';

const Home = () => {

  const {product} = useContext(ShopContext);
  console.log(product);

  return (
    <div className='prodBox' >
      {product.map((prod)=>(
        <SingleProd prod={prod} />
      ))}

    </div>
  )
}

export default Home