import React, { useState } from 'react';
import './Sign.css';
import image from './components/l2.png';
import { Link } from 'react-router-dom'; // Import Link

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password || !confirmPassword) {
      alert('Please fill out all fields');
      return;
    }

    if (!/^[a-zA-Z_]\w*$/.test(username)) {
      alert('Username must start with a letter or underscore and contain only letters, numbers, and underscores');
      return;
    }

    if (!/(?=.\d)(?=.[a-zA-Z])(?=.*[^a-zA-Z0-9])/.test(password)) {
      alert('Password must contain at least one letter, one number, and one special character');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }

    // If all validation passes, you can proceed with form submission
    // Example: Submit the form data to the backend
  };

  return (
    <div className="sign-in-container">
      <div className="header">
        <img src={image} alt="Logo" className="logo" />
        <h2 className="login-heading">Sign Up</h2>
      </div>
      <div className="sign-in-card">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" className="input-field" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-button">Sign Up</button>
        </form>
      </div>
      <div className="signin-account-card">
        <p>Already have an account? <Link to="/signin">Sign In </Link></p>
      </div>
    </div>
  );
};

export default SignUpForm;