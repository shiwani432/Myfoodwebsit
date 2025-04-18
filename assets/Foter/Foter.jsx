import React from 'react'
import './Foter.css'

const Foter = () => {
    return (
        <div className="footer">
                <div className="footer-content">
            <h3>🍽️ Foodie App</h3>
            <p>Delicious food, delivered fresh to your doorstep.</p>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#menu-list">Menu</a>
              <a href="#food-Display">Mobile-app</a>
              <a href="#contact">Contact</a>
            </div>
                <h1>Contact Us</h1>
                <p>Email: shiwaniborana63@gmai.com</p>
                <p>Phone: +91-8905745103</p>
          </div>
          <p className="footer-bottom">
            &copy; {new Date().getFullYear()} Foodie App | All rights reserved.
          </p>
    


          
        </div>
      );
    };

export default Foter
