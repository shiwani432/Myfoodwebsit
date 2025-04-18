import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import search from './image/search1.png';
// import bag from './image/bagimag.png';

const Nav = ({ cartItems }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1> 🍟 🍽 🍟<br />SN Food</h1>

      <ul className="nev-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/mobileapp">Mobile App</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="nev-serach-ican">
        <img src={search} alt="search" className='search' />
        {/* <div className="nev-serach-ican-back">
         
          <img
            src={bag}
            alt="cart"
            className='bag'
            onClick={() => navigate('/cart')}
          />
          <div className="dot">{cartItems.length}</div> 
        </div> */}
        <button onClick={() => navigate('/signin')}>Sign in</button>
      </div>
    </div>
  );
};

export default Nav;
