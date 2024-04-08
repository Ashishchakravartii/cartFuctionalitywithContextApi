import React from 'react'
import { Link } from 'react-router-dom'
import "../header.style.css"

const Header = () => {
  return (
    <div className='headBox'>
      <h1>Cart - Context API Practice</h1>
      <ul className='headUl'>
        <li><Link to="/" >Home</Link></li>
        <li> <Link to="/cart"> Cart</Link> </li>
      </ul>
    </div>
  )
}

export default Header