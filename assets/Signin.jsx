import React, { useState } from 'react';
import './Signin.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle sign-in logic (API call or dummy check)
    alert('Signed in successfully!');
    navigate('/');
  };

  return (
    <div className="sin-img-wrapper">
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
      </form>
    </div>
    </div>
  );
};

export default Signin;
