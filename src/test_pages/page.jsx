
import React from 'react';
import Home from './home';
import Cuisine from './cuisine';
import Searched from './searched';
import {Route, Routes} from 'react-router-dom';

function page() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cuisine/:type' element={<Cuisine />}/>
      <Route path='/Searched/:search' element={<Searched />}/>
    </Routes>
  )
}

export default page