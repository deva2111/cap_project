
import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Login from "./componets/login";
import Signup from "./componets/signup";
import Nav from "./componets/nav";
import DashLayout from './componets/Layout';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        
        <Route path="/account/login" element={<Login/>}/>
        <Route path="/account/signup" element={<Signup/>}/>
        <Route path="/home" element={<DashLayout/>}/>
        
        
        
        
      </Routes>
    </div>
  );
}

export default App;