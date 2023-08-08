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
            <li>Home</li>
            <li>Feature</li>
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
