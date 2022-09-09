import React from 'react';
import './Select.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import okavango from './OKAVANGO.png';
import simage from './s-image.png';
import left from './left.png';
import middle from './middle.png';
import right from './right.png';
import math from './math.png';
import social from './social.png';
import language from './language.png';
import science from './science.png';
import computer from './computer.png';
import al from './al.png';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
function Select() {
  return (
    <div className='s-all'>
<Link to='Select'></Link>
<div className='s-header'>
<div className='s-logo'>
    <img src={logo} alt=''/>
    <img className='s-oka' src={okavango} alt=''/>
</div>
<div className='s-image'>
  <NotificationsNoneIcon/>
    <img className='s-photo' src={simage} alt=''/>
</div>
<div className='s-image2'>
    <div className='s-left'>
      <span className='s-home'>Home</span>
      <img src={left} alt=''/>  
    </div>
    <div className='s-middle'>
      
      <img className='middle' src={middle} alt=''/>  
      <span className='s-course'>Courses</span>
    </div>
    <div className='s-right'>
      
      <img className='right' src={right} alt=''/>  
      <span className='s-donate'>Donate</span>
    </div>
</div>
</div>
<div className='s-body'>
  <div className='search'>
<div className='search-icon'>
<SearchIcon/>
<span className=''>Search course</span>
</div>
  
  <div className='next'>
<span>Next</span>
  </div>

  </div>
  <div className='m-body'>
    <h1 className='choose'>Choose course</h1>
    <div className='math'>
      <img className='math-im' src={math} alt=''/>
    <span className='s-math'>Mathematics</span>
    <span className='p-math'>purpose of this course is to teach student math<br/>foundation</span>
    <span className='by'>by<br/>Professor Kabera Alex</span>
    </div>
    <div className='social'>
      <img className='social-im' src={social} alt=''/>
    <span className='s-social'>social studies</span>
    <span className='p-social'>purpose of this course is to teach student social studies<br/>foundation</span>
    <span className='s-by'>by<br/>Professor Kabera Alex</span>
    </div>
    <div className='language'>
      <img className='language-im' src={language} alt=''/>
    <span className='s-language'>Language</span>
    <span className='p-language'>purpose of this course is to teach student Language<br/>foundation</span>
    <span className='l-by'>by<br/>Professor Kabera Alex</span>
    </div>
  </div>
  <div className='b-body'>
  <div className='science'>
      <img className='science-im' src={science} alt=''/>
    <span className='s-science'>Science</span>
    <span className='p-science'>purpose of this course is to teach student Science<br/>foundation</span>
    <span className='science-by'>by<br/>Professor Kabera Alex</span>
    </div>
    <div className='al'>
      <img className='al-im' src={al} alt=''/>
    <span className='s-al'>AL</span>
    <span className='p-al'>purpose of this course is to teach student al<br/>foundation</span>
    <span className='al-by'>by<br/>Professor Kabera Alex</span>
    </div>
    <div className='computer'>
      <img className='computer-im' src={computer} alt=''/>
    <span className='s-computer'>Computer Science</span>
    <span className='p-computer'>purpose of this course is to teach student Language<br/>foundation</span>
    <span className='comp-by'>by<br/>Professor Kabera Alex</span>
    </div>
  </div>
</div>
    </div>
  );
}

export default Select;
