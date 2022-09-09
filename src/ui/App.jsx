import React from 'react';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/Login' element={ <Login />}/>
        <Route path='/Signup' element={ <Signup />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
