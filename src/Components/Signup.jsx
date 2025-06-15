import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Signup.css';

const Signup = () => {
  const [agree, setAgree] = useState(false);

  return (
    <div className="signup-page-bg">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form">
          <label className="signup-label">Username:</label>
          <input type="text" className="signup-input" placeholder="" autoComplete="username" />
          <label className="signup-label">Email:</label>
          <input type="email" className="signup-input" placeholder="" autoComplete="email" />
          <label className="signup-label">Password:</label>
          <input type="password" className="signup-input" placeholder="" autoComplete="new-password" />
          <label className="signup-label">Password Again:</label>
          <input type="password" className="signup-input" placeholder="" autoComplete="new-password" />
          <div className="signup-terms-row">
            <input
              type="checkbox"
              id="signup-terms"
              checked={agree}
              onChange={e => setAgree(e.target.checked)}
              className="signup-terms-checkbox"
            />
            <label htmlFor="signup-terms" className="signup-terms-label">
              I agree with the <Link to="/home" className="signup-terms-link">term of services</Link>
            </label>
          </div>
          <button type="submit" className="signup-btn" disabled={!agree}>Register</button>
        </form>
        <div className="signup-login-row">
          Already a member? <Link to="/login" className="signup-login-link">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
