import React from 'react'
import './css/footer.css'
function Footer() {
  return (<>
    <div className='footer'>
    <div className='logo'>
    <p>NEWS</p>
    </div>
    <div className='footermenu'>
    <div className='menu'>
       <p>Categories</p>
       <ul>
        <li>International</li>
        <li>Regional</li>
        <li>Politics</li>
        <li>Business</li>
        <li>Sports</li>
        <li>Health</li>
       </ul>
    </div>
    <div className='menu'>
    <p>Company</p>
       <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Privacy Policy</li>
        <li>Terms Of Services</li>
        <li>Contact Us</li>
       </ul>
    </div>
    <div className='menu'>
    <p>Social Media</p>
       <ul>
        <li>Youtube</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Twitter</li>
       </ul>
    </div>
    </div>   
    </div>
     <div className='copyright'> <p>© 2023 All Rights Reserved</p></div></>
  )
}

export default Footer
