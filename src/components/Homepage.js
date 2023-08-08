import React from 'react'
import './css/homepage.css'
import Navbar from './Navbar'
import Header from './Header'
import Latestpost from './Latestpost'
import Recentpost from './Recentpost'
import Subcribe from './Subcribe'
import Footer from './Footer'


function Homepage() {

  
  return (
    
    <div className='main'>
      <div className='bgcolor'>
      <Navbar/>
      <Header/>
      </div>
      <Latestpost/>
      <Recentpost/>
      <Subcribe/>
      <Footer/>
    </div>
 
  )
}

export default Homepage
