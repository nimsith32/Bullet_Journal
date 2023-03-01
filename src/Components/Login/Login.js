import React from 'react'
import "./Signinform.css";

function Signin(){
  return (
    <div className='cover'>
        <h1>Login</h1>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder="Password" />

        <div className='login-btn'>Login</div>

        <p className='text'>Or Login Using</p>

        <div className='alt-login'>
            <div className='facebook'></div>
            <div className='google'></div>
        </div>
    </div>
  );
};

export default Signin