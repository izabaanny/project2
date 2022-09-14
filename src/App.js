import React from 'react';
import './App.css';
import Home from './UI/Components/Pages/Home';
import About from './UI/Components/Pages/About';
import Select from './UI/Components/Pages/Select';
import Register from './UI/Components/Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <div className='App'>
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/About' element={ <About />} />
          <Route path='/Donates' element={ <Select />} />
          <Route path='/register' element={ <Register />} />
        </Routes>
      </Router>
    </>
    </div>
  );
}

export default App
