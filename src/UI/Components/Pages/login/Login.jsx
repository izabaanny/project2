import React from 'react'
import './Login.css'
import google from './google.png'
import line from './Line1.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-container'>
      
        <div className='login-header'>
            <h1>Sign in</h1>
            <p>Welcome back happy to have you here again</p>
            <img src={google} alt="google" />
            <button>Sign in with google</button>
        </div>
        <div className="section">
        <img src={line} alt="" />
        <h3>or</h3>
        <img src={line} alt="" />
        </div>
        <h4 className="email-sign-in">Sign in with email</h4>
        <form className='form-input' >
            <input type="text" placeholder='Email address'/>
            <input type="text" placeholder='password'/>
            <button>Sign in</button>
            <hr />
        </form>
        <div className='down-content'>
            <Link to='/Login'>Signin</Link>
            <a href="./">Forget password?</a>
        </div>
    </div>
  )
}

export default Login
