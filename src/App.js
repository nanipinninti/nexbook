import './App.css';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home';
import Footer from './components/Footer'
function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/signup' element = {<Signup />}/>
          <Route path='/login' element = {<Login />}/>
          <Route path='/footer' element={<Footer/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
