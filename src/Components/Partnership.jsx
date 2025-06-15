import React from 'react';
import PartnershipImg from '../Images/partnershipImage.jpeg';
import PartnerHonda from '../Images/PartnerHonda.jpg';
import PartnerMahalife from '../Images/PartnerMahalife.jpg';
import PartnerOil from '../Images/PartnerFortune.jpg';
import {Link} from 'react-router-dom';

import '../Style/Partnership.css';

const Partnership = () => {
  return (
    <div className="partnership-container">
      <section className="partnership-hero">
        <div className="partnership-content">
          <h1>Partnership with <span className="highlight">'We Donate'</span></h1>
          <h3>Over 50+ brands/companies have partnered with Donatekart in their philanthropic/CSR journey.</h3>
          <p>
            We bring in 100% transparency in giving with our in-kind donations model. With Donatekart, you can support the most pressing causes across the country and impact thousands of lives. If your company or foundation is looking to make a difference today, we're here to partner with you.
          </p>
          <Link to={"/contact"}>
          <button className="contact-btn">Contact Us</button>
          </Link> 
        </div>
        <div className="partnership-image">
          <img src={PartnershipImg} alt="Happy children" />
        </div>
      </section>

      {/* {Our Partner} */}
      <section className="partners-section">
        <h2>Our Partners</h2>
        <div className="partners-flip-grid">
          {/* Honda */}
          <div className="partner-flip-card">
            <div className="partner-flip-inner">
              <div className="partner-flip-front">
                <img src={PartnerHonda} alt="Honda" className="partner-flip-img" />
                <div className="partner-flip-title">Honda</div>
              </div>
              <div className="partner-flip-back">
                <ul>
                  <li>We contribute 2 lakhs in NGO.</li>
                  <li>We partnership in 2018.</li>
                  <li>Supporting education initiatives.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Herbal Mehandi */}
          <div className="partner-flip-card">
            <div className="partner-flip-inner">
              <div className="partner-flip-front">
                <img src={PartnerMahalife} alt="Herbal Mehandi" className="partner-flip-img" />
                <div className="partner-flip-title">MahaLife Health</div>
              </div>
              <div className="partner-flip-back">
                <ul>
                  <li>We contribute 2 lakhs in NGO.</li>
                  <li>We partnership in 2018.</li>
                  <li>Empowering women artisans.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Fortune */}
          <div className="partner-flip-card">
            <div className="partner-flip-inner">
              <div className="partner-flip-front">
                <img src={PartnerOil} alt="Fortune" className="partner-flip-img" />
                <div className="partner-flip-title">Fortune</div>
              </div>
              <div className="partner-flip-back">
                <ul>
                  <li>We contribute 2 lakhs in NGO.</li>
                  <li>We partnership in 2018.</li>
                  <li>Promoting healthy living.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  )
}

export default Partnership
