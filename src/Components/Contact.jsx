import React from 'react';
import '../Style/Contact.css';
import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-card">
          <div className="contact-icon"><i className="fa fa-map-marker"></i></div>
          <div className="contact-title">OUR MAIN OFFICE</div>
          <div className="contact-detail">West Delhi<br/>Delhi, PIN-110095</div>
        </div>
        <div className="contact-card">
          <div className="contact-icon"><i className="fa fa-phone"></i></div>
          <div className="contact-title">PHONE NUMBER</div>
          <div className="contact-detail">+91 12-3695-7616</div>
        </div>
        <div className="contact-card">
          <div className="contact-icon"><i className="fa fa-fax"></i></div>
          <div className="contact-title">FAX</div>
          <div className="contact-detail">1-234-567-8900</div>
        </div>
        <div className="contact-card">
          <div className="contact-icon"><i className="fa fa-envelope"></i></div>
          <div className="contact-title">EMAIL</div>
          <div className="contact-detail"><a href="mailto:info@wedonate.org">wedonate13@gmail.org</a></div>
        </div>
      </div>
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Enter your Name" required />
          <input type="email" placeholder="Enter a valid email address" required />
          <textarea placeholder="Your message" rows={4} required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      {/* {Location & Map} */}
      <div className="location-map-section">
        <div className="location-map-left">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d224347.59848883626!2d77.2089824551768!3d28.526755441521296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shumanity%20ngo!5e0!3m2!1sen!2sin!4v1749988617469!5m2!1sen!2sin"
        title="Location of WeDonate NGO on Google Maps"
         width="600" 
         height="450" 
         allowfullscreen="" 
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">
         </iframe>
        </div>
        <div className="location-map-right">
          <h3 className="location-map-title">Our Location</h3>
          <div className="location-map-address">
            West Delhi, Delhi, PIN - 110095
          </div>
          <div className="location-map-about">
            <b>About NGO:</b> <br/>
            We started our NGO in 2013 with a mission to empower underprivileged communities through education, healthcare, and sustainable development. Over the years, we have impacted thousands of lives and continue to expand our reach with the support of our partners and volunteers.
          </div>
          <div className="location-map-extra">
            <b>Working Hours:</b> Mon - Sat, 9:00 AM - 6:00 PM<br/>
            <b>Follow us:</b>
            <span className="location-map-socials">
              <Link to={"/home"} aria-label="Facebook" className="location-map-social"><i className="fab fa-facebook-f"></i></Link>
              <Link to={"/home"} aria-label="Twitter" className="location-map-social"><i className="fab fa-twitter"></i></Link>
              <Link to={"/home"} aria-label="LinkedIn" className="location-map-social"><i className="fab fa-linkedin-in"></i></Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
