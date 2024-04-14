import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Signin.css';
import image from './components/l2.png';

const SignInForm = () => {
  return (
    <div className="sign-in-container">
      <div className="header">
        <img src={image} alt="Logo" className="logo" />
        <h2 className="login-heading">Login</h2>
      </div>
      <div className="sign-in-card">
        <form className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input-field" />
          </div>
          <button type="submit" className="login-button">Login</button>
          <Link to="/forgot" className="forgot-password-link">Forgot Password?</Link>
        </form>
      </div>
      <div className="create-account-card">
        <p>Don't you have an account? <Link to="/signup">Create Account</Link></p>
      </div>
    </div>
  );
};

export default SignInForm;
