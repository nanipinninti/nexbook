import './App.css';
import { HashRouter,Route,Routes,Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login'
function App() {
  return (
    <div className="body">
      <HashRouter>
        <Routes>
          <Route path='*' element = {<Login />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
