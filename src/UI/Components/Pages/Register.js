import React from 'react';
import './Register.css';
import logo from './logo.png';
import google from './google.png';
import line from './Line1.png'
import okavango from './OKAVANGO.png';
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='r-all'>
        <Link to='Register'></Link>
        <div className='r-body'>
        <header className='r-header'>
      <div className='r-logo'>
        <img className='r-img' src={logo} alt=''/>
         <img className='r-oka' src={okavango} alt=''/>
      </div>
     
      <nav className='r-nav'>
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
     <h1 className='regi'>Register</h1>
     <div className='r-sign'>
     <div className='r-register'>
     <img className='google' src={google} alt=''/>
     <div className='google1'>
      <li ><a> Register with google</a></li>
      </div>
      <div className="r-section">
        <img src={line} alt="" />
        <h3>or</h3>
        <img src={line} alt="" />
        </div>
        <h4 className="sign-in">create account here</h4>
     <div className='r-sign1'>
      
<form className='form-input1'>
  <input className='name' type="text" placeholder='full name'/>
  <input className='email' type="text" placeholder='Email address'/>
  <input className='password' type="password" placeholder='Create password'/>
  <input className='c-password' type="password" placeholder='Comfirm password'/>
  <button>Create account</button>
</form>
<span className='check'>check link on your email or phone</span>
     </div>
     </div>
     </div>
     </div>
     </div>
  );
}

export default Register;
