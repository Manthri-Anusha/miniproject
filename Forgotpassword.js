import React from 'react';
import './Forgotpassword.css';
import image from './components/l2.png';

const SignUpForm = () => {
  return (
    <div className="sign-in-container">
      <div className="header">
        <img src={image} alt="Logo" className="logo" />
        <h2 className="login-heading">Forgot Passsword</h2>
      </div>
      <div className="sign-in-card">
        <form className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input type="password" id="password" className="input-field" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" className="input-field" />
          </div>
          <button type="submit" className="login-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;