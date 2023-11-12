import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';


const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home/>}/> 
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}


export default BodyComponent;
