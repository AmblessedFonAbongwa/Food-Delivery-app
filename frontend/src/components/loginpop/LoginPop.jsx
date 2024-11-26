import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'

const LoginPop = ({setShowLogin}) => {
  const [currentState, setCurrentState]=useState('Login')
  return (
    <div className='loginPopUp'>
     <form  className="form-container">
<div className="login-title">
  <h2>{currentState}</h2>
  <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)} />
</div>
   <div className="popup-input">
    {currentState==='Login'?<></>:<input type="text" placeholder='Your Name' required />}
    <input type="email" placeholder='your Email' required />
    <input type="password" placeholder='Password' required />
   </div>
   <button>{currentState==='sign up'?"Create Account": 'Login'}</button>
   <div className="login-condition">  
   <input type="checkbox" required /><p>By continuing, I agree to the terms & privacy policy</p>
   </div>
   {currentState==='Login'?<p>Create A New Account? <span onClick={()=>setCurrentState('sign up')}>Click Here</span></p>: 
     <p>Already have an account <span onClick={()=>setCurrentState('Login')}>Login Here</span></p>}


     </form>
    </div>
  )
}

export default LoginPop
