import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Body/Home';
import FooterComponent from './components/Footer/FooterComponent';
import NavbarComponent from './components/Header/NavbarComponent';
import About from './components/Body/About';
import Rooms from './components/Body/Rooms';
import Contacts from './components/Body/Contacts';
import Register from './components/Authentication/Register';
import BookedRooms from './components/Booking/BookedRooms';
function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booked-rooms" element={<BookedRooms />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
