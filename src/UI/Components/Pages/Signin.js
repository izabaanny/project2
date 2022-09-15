import React from 'react'
import './Signin.css'
import logo from './logo.png';
import okavango from './OKAVANGO.png';
import google from './google.png'
import line from './Line1.png'
import { Link } from 'react-router-dom'

function Login() {
  return (

    <div className='login-container'>
      <Link to='Signin'></Link>
      <div className='s-sign'>        
        <header className='header1'>
      <div className='s-logo'>
        <img className='s-img' src={logo} alt=''/>
         <img className='s-oka' src={okavango} alt=''/>
      </div>
     
      <nav className='s-nav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <select>
              <option value="Courses">Courses</option>
              <option value="Mathematics">Mathematics</option>
              <option value="computer science">computer science</option>
              <option value="physics">physics</option>
              <option value="Biology">Biology</option>
              <option value="chemistry">chemistry</option>
              <option value="Economics">Economics</option>
              <option value="Geograph">Geograph</option>
            </select>
            </li>
            <li>
              
                <a href='#About'>About</a>
              
            </li>
            <li>
              <a href='/Donates' className='nav-link scroll-link'>Donates</a>
            </li>
            
            <li >
              <Link to='/Login'>Signin</Link>
            </li>
            <li>
              <a href='/Register'>register</a>
              </li>
              </ul>
          </nav>
     </header>
     </div>
     <div className='sign-body'>
        <div className='login-header'>
            <span className='s-welcome'>Welcome back happy to have you here again</span>
            <img className='google2' src={google} alt="google" />
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
            <button className='s-1'>  <li className='s-wor'>
              <a href='/Donates'>Sign in</a>
              </li>
              </button>
            <hr />
        </form>
        <div className='down-content'>
            <Link to='/Login'></Link>
            <a href="./">Forget password?</a>
        </div>
        </div>
    </div>
  )
}

export default Login
