import React from 'react'
import google from '../../../resources/icons/google.png'
import line from '../../../resources/icons/Line1.png'
import './RightSide.css'

function RightSide() {
  return (
    <div className='right-container'>
        <div className='signup-header'>
            <h1>Register</h1>
            <img src={google} alt="google" />
            <button>Sign in with google</button>
        </div>
        <div className="signup-section">
        <img src={line} alt="" />
        <h3>or</h3>
        <img src={line} alt="" />
        </div>
        <h4 className="email-sign-in">create account here</h4>
        <form className='form-input' >
            <input type="text" placeholder='full name'/>
            <input type="text" placeholder='Email address'/>
            <input type="text" placeholder='Create password'/>
            <input type="text" placeholder='Confirm password'/>
            <button>Create account</button>
        </form>
        <p>check link on your email or phone</p>
    </div>
  )
}

export default RightSide
