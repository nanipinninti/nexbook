import './App.css';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home/Home';
import HotelDetails from './components/Home/HotelDetails';
import Sports from './components/Sports/Sports'
import StadiumDetails from './components/Sports/StadiumDetails'

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/signup' element = {<Signup />}/>
          <Route path='/login' element = {<Login />}/>
          <Route path='/sports' element = {<Sports />}/>
          <Route path='/hotel-details/:hotel_id' element = {<HotelDetails />}/>
          <Route path='/stadium-details/:id' element = {<StadiumDetails />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
