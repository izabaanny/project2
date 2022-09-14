import React from 'react';
import './Home.css';
import logo from './logo.png';
import okavango from './OKAVANGO.png';
import mineduc from './mineduc.png';
import un from './un.png';
import unicef from './unicef.png';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='all'>
     <header className='page-header'>
      <div className='logo'>
        <img className='img' src={logo} alt=''/>
         <img className='oka' src={okavango} alt=''/>
      </div>
      
        <nav className='nav'>
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

        <div className='page-body'>
          <span className='word1'>Information may be<br/>free, but an education<br/>is priceless.</span>
          <div className='start'><li className='start1'><a href='/start'>start now - it's free</a></li></div>

        </div>
        <div className='page-bottom'>
      <div className='title'>
        <h1>Partners</h1>
        <div className='logos'>
          <div className='mineduc'>
<img src={mineduc} alt=''/>
<span>MINEDUC</span>
</div>
<div className='un'>
  <img src={un} alt=''/>
  <span>UNITED NATIONS</span>
</div>
<div className='unicef'>
  <img src={unicef} alt=''/>
  <span>UNICEF</span>
</div>
        </div>
      </div>
        </div>
        <div className='page-bottom1'>
<h1 className='h1'>How it's Works</h1>
<div className='service'>
<div className='simg'>

</div>
<span className='servi'>Service</span>
<span className='ensure'>Ensure inclusive and Equitable quality<br/>Education and promote life long learning<br/>opportunities for all.</span>
</div>
<div className='problem'>
<div className='simg'>

</div>
<span className='servi'>Problem</span>
<span className='ensure'>Gapin education where all can't get access to<br/>best class or can't afford school fees and get<br/>quality and equitable knowledge.</span>
</div>
<div className='solution'>
<div className='simg'>

</div>
<span className='servi'>Solution</span>
<span className='ensure'>We promote and take free online course in<br/>digital world,there are more opportunities<br/>to get access to education than just go to<br/>university.</span>
</div>
        </div>
        <div className='page-bottom2'>
        <span className='what'>
         <span className='ti'> What we offer</span>
        </span>
        <div className='pimg'>
        </div>
        <div className='lorem'>Lorem ipsum dolor sit amet,consectetur adipiscing eli.proin lorem velit ipsum facilisis.ipsum,<br/>congue volutpat faucibus quis.fermentum dictum ultricie dapibus sed lorem duis ut in cursus.<br/>massa semper imperdiet sagittis, congue mauris turpis.ut amet eget adipiscing imperdiet<br/>ultrices lectus urma in. Eu scelerisque pellentesque ut non. Sed dui aliquet sed vitae,Nibh vel <br/>nec etiam ut dolor.Quisque et velit eu dui volutpat,cras non odi mi.Mattis ac amet,etiam est<br/>lacinia non. Magna etiam tempor condimentium tortor,labortis luctus.</div>
        </div>
        <div className='site-link'>
        <img className='limg' src={logo} alt=''/>
        <span className='loka'>OKAVANGO</span>
          <div className='first'>
            <span className='site'>Site links</span>
            <ul>
              <li>Home</li>
              <li>courses</li>
              <li>donates</li>
              <li>About us</li>
            </ul>
          </div>
          <div className='second'>
            <span className='partern'>Parterns</span>
            <ul>
              <li>Mineduc</li>
              <li>United Nations</li>
              <li>Unicef</li>
            </ul>
          </div>
          <div className='third'>
            <span className='contact'>Contact Us</span>
            <ul>
              <li>email:okavangoinfo.net</li>
              <li>Tel: +250782222221</li>
              <li>website:www.okavango.com</li>
            </ul>
          </div>
          <div className='copy'>Copyright c all right reserved Okavango 2022</div>
        </div>
        
        </div>
  
  );
  }
