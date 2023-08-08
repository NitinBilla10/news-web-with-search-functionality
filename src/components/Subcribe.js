import React from 'react'
import './css/subcribe.css'
function Subcribe() {
  return (
    <div className='subcribe'>
        <p>Sign Up for Our<br/>Newsletters</p>
        <div className='subcribeinput'>
        <div class="mb-3">
         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address"/>
        </div>
        <button>Subscribe Now</button>
        </div>

      
    </div>
  )
}

export default Subcribe
