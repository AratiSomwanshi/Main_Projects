// src/App.js
import React from 'react';





import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Make sure these components exist
import Products from './components/Products';
import Cart from './components/Cart';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
