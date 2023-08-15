import React from 'react'
import './css/navbar.css'



function Navbar() {
  return (
    <div className='navbar'>
    <div className='logo'>
        <p>NEWS</p>
    </div>
    <div className='menu'>
        <ul>
            <a href='/'><li>Home</li></a>
            <a href='/search'><li>Search</li></a>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    <div className='subcribebtn'>
        <button>Subscribe</button>
    </div>
      
    </div>
  )
}

export default Navbar
