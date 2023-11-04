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
        <Route path="/" exact element={<Home/>}/>
        <Route path="/menu" exact element={<Menu/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default BodyComponent;
