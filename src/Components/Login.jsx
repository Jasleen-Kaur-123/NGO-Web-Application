import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="login-page-bg">
      <div className="login-page-container">
        <h1 className="login-page-title">Login</h1>
        <div className="login-card">
          <h2 className="login-card-title">Sign in to your account</h2>
          <form className="login-form">
            <label className="login-label">Username or Email Address</label>
            <input type="text" className="login-input" placeholder="" autoComplete="username" />
            <label className="login-label">Password</label>
            <div className="login-password-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                className="login-input"
                placeholder=""
                autoComplete="current-password"
              />
              <span
                className="login-show-password"
                onClick={() => setShowPassword(s => !s)}
                tabIndex={0}
                role="button"
              >
                {showPassword ? 'hide' : 'show'}
              </span>
            </div>
            <div className="login-recaptcha-row">
              <div className="login-recaptcha-placeholder">
                <input type="checkbox" id="recaptcha" className="login-recaptcha-checkbox" />
                <label htmlFor="recaptcha" className="login-recaptcha-label">I'm not a robot</label>
                <span className="login-recaptcha-img"></span>
              </div>
            </div>
            <div className="login-remember-row">
              <input
                type="checkbox"
                id="rememberMe"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="login-remember-checkbox"
              />
              <label htmlFor="rememberMe" className="login-remember-label">Remember Me</label>
            </div>
            <button type="submit" className="login-btn-primary">Log In</button>
            <div className="login-links-row">
              <Link to={"/register"} className="login-forgot-link">I Forgot my Password</Link>
              <span className="login-register-link">New User? <Link to="/register">Register</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;