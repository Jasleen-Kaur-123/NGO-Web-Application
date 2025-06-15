import React from 'react';
import eventOne from '../Images/eventOne.jpeg';
import eventFour from '../Images/eventFour.jpeg';
import '../Style/Donate.css';
import {Link} from 'react-router-dom';

const Donate = () => {
  return (
    <div className="donate-page-container">
      {/* Section 1: Violet Hero Section */}
      <section className="donate-hero-section">
        <div className="donate-hero-content">
          <h1>Make an Impact Every Month</h1>
          <p>
            Your monthly donation can change lives. Support our mission and help us reach more people in need. Choose a mission, set your amount, and make a difference today!
          </p>
          <form className="donate-form">
            <select>
              <option>Select Mission</option>
              <option>Feed Starving Sadhus</option>
              <option>Medical Aid</option>
              <option>Education Support</option>
            </select>
            <input type="number" placeholder="Enter Any Desired Amount" />
            <div className="donate-amount-options">
              <button type="button">Rs.300/Mon</button>
              <button type="button">Rs.500/Mon</button>
              <button type="button">Rs.1000/Mon</button>
            </div>
            <button className="donate-now-btn" type="submit">Rs.1000 Donate Now</button>
          </form>
          <div className="donate-impact-note">
            Contribution of Rs.1000 will Feed 1 person/Month
          </div>
        </div>
      </section>

      {/* Section 2: Achievements Cards */}
      <section className="donate-achievements-section">
        <div className="donate-achievement-card">
          <h3>50+ Daily Food Contributions</h3>
          <p>Every day, over 50 meals are provided to those in need, thanks to your support.</p>
        </div>
        <div className="donate-achievement-card">
          <h3>10% More Donations Than Last Year</h3>
          <p>We have seen a 10% increase in donations compared to our previous statistics. Thank you for your generosity!</p>
        </div>
        <div className="donate-achievement-card">
          <h3>Greetings from Different States & Countries</h3>
          <p>We receive heartfelt greetings and support from people across various states and countries, making our impact global.</p>
        </div>
      </section>

      {/* Section 3: Donation Cards */}
      <section className="donate-cards-section">
        <h2>Popular Monthly Missions</h2>
        <div className="donate-cards">
          <div className="donate-card">
            <img src={eventOne} alt="Feed Starving Sadhus" />
            <h3>Spreading Medical Awareness</h3>
            <ul className='donate-card-ul-li'>
              <li>Educating children and families on hygiene, health, and nutrition daily.</li>
              <li>Conducting regular health camps and sessions for disease prevention awareness in Ngo.</li>
            </ul>
              <Link to={"/donate"}>
              <button>Donate Now</button>
              </Link>
          </div>
          <div className="donate-card">
            <img src={eventFour} alt="Medical Aid" />
            <h3>Organise Extracurricular Activities</h3>
            <ul className='donate-card-ul-li'>
             <li>Encouraging creativity through art, dance, music, and fun games.</li>
             <li>Building confidence with sports, storytelling, drama, and team-based activities.</li>
            </ul>
            <Link to={"/donate"}>
              <button>Donate Now</button>
              </Link>
          </div>
          <div className="donate-card">
            <img src={eventOne} alt="Education Support" />
            <h3>Empowering Young Minds</h3>
            <ul className='donate-card-ul-li'>
              <li>Providing quality education and support to build confident young leaders.</li>
              <li>Encouraging creativity, curiosity, and growth through engaging learning activities.</li>
            </ul>
            <Link to={"/donate"}>
              <button>Donate Now</button>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
