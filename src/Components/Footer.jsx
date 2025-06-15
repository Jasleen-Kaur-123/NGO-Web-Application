import React from 'react';
import '../Style/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="footer-dark-content">
        <div className="footer-dark-col contact">
          <div className="footer-dark-row">
            <span className="footer-dark-icon"><i className="fas fa-map-marker-alt"></i></span>
            <div>
              <div className="footer-dark-contact-title">13 We Donate</div>
              <div className="footer-dark-contact-main">West Delhi, Delhi, India</div>
            </div>
          </div>
          <div className="footer-dark-row">
            <span className="footer-dark-icon"><i className="fas fa-phone"></i></span>
            <div className="footer-dark-contact-main">+91 88-5468-5162</div>
          </div>
          <div className="footer-dark-row">
            <span className="footer-dark-icon"><i className="fas fa-envelope"></i></span>
            <Link to={"/home"} className="footer-dark-contact-main email">wedonate13@gmail.com</Link>
          </div>
        </div>
        <div className="footer-dark-col about">
          <div className="footer-dark-about-title">About WeDonate</div>
          <div className="footer-dark-about-desc">
          For 12 years, our NGO has been dedicated to uplifting underprivileged children, providing education, care, and hope. Join us as we continue this journey of compassion and positive change, making a lasting impact on countless young lives.          
          </div>
          <div className="footer-dark-socials">
            <Link to={"/home"} className="footer-dark-social" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
            <Link to={"/home"}  className="footer-dark-social" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
            <Link to={"/home"} className="footer-dark-social" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
            <Link to={"/home"} className="footer-dark-social" aria-label="GitHub"><i className="fab fa-github"></i></Link>
          </div>
        </div>
      </div>
      <div className="footer-dark-bottom">
        <span>© {new Date().getFullYear()} We Donate. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
