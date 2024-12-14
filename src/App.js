import './App.css';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element = {<Signup />}/>
          <Route path='/login' element = {<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
