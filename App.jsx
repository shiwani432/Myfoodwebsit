import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Home from './assets/Home/Home';
import Menu from './assets/Menu';
import Contact from './assets/Contact/Contact';
import Cart from './assets/Cart/Cart';
import Footer from './assets/Foter/Foter';
import Mobileapp from './assets/Mobileapp/Mobileapp';
import Signin from './assets/Signin';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const isMobileApp = location.pathname === '/mobileapp';

  // Add item to cart
  const addToCart = (item) => {
    const existing = cartItems.find(i => i.id === item.id);
    if (existing) {
      setCartItems(prev =>
        prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <div className={isMobileApp ? 'mobile-wrapper' : ''}>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mobileapp" element={<Mobileapp />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
