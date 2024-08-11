import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Nav from './Nav';
import All from './All';
import Fullstack from './Fullstack';
import React from 'react'
import Datascience from './Datascience';
import Cybersecurity from './Cybersecurity';
import Career from './Career';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div> 
      <BrowserRouter>
<Nav />
<Routes>
<Route index path='/' element={<All />} />
  <Route path='/fullstack' element={<Fullstack />} />
  <Route path='/datascience' element={<Datascience />} />
  <Route path='/cybersecurity' element={<Cybersecurity />} />
  <Route path='/career' element={<Career />} />
</Routes>
</BrowserRouter>
    </div>
  )
}


export default App