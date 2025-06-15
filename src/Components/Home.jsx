import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Home.css';
import HomeDonate from '../Images/HomeDonate.png';
import HomeGreet from '../Images/HomeGreet.webp';

const GreetingModal = ({ open, onClose }) => { 
  const [name,setName]=useState('');
  if (!open) return null;
  return (
    <div className="greeting-modal-overlay" onClick={onClose}>
      <div className="greeting-modal" onClick={e => e.stopPropagation()}>
        <h3>Send a Greeting</h3>
        <form className="greeting-modal-form">
          <label>Name</label>
          <input type='text' 
          placeholder='Name' 
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}></input>
          <label>Date</label>
          <input 
          type="date" 
          placeholder='Date'
          required/>
          <label>Occasion</label>
          <input type="text" placeholder="Occasion" />
          <label>Message</label>
          <textarea 
          placeholder="Write your message..." 
          rows={4}
          required></textarea>
          <div className="greeting-modal-actions">
            <button type="button" className="send-btn" onClick={() => alert(`Thank you ${name}`)}>Send</button>
            <button type="button" className="delete-btn" onClick={onClose}>Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

function Home() {
  const [greetingOpen, setGreetingOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Help 100+ Children for their Education</h1>
            <h2>No one has ever become poor by giving</h2>
            <Link to={"/event"}> 
            <button className="hero-cta">JOIN US</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown/Info Card */}
      <div className="countdown-card">
        <h2>The CountDown Begin</h2>
        <p>Donate now and join us in empowering children's futures through our dedicated NGO — every contribution makes a difference.</p>
        <div className="countdown-box">
          <div className="countdown-box-inner">
            <div className="countdown-timer-segment">
              <span className="countdown-timer-number">12</span>
              <span className="countdown-timer-label">Days</span>
            </div>
            <div className="countdown-timer-segment">
              <span className="countdown-timer-number">05</span>
              <span className="countdown-timer-label">Hours</span>
            </div>
            <div className="countdown-timer-segment">
              <span className="countdown-timer-number">23</span>
              <span className="countdown-timer-label">Minutes</span>
            </div>
            <div className="countdown-timer-segment">
              <span className="countdown-timer-number">10</span>
              <span className="countdown-timer-label">Seconds</span>
            </div>
          </div>
        </div>
        <div className="countdown-items">
          <div>Date</div>
          <div>Month</div>
          <div>Year</div>
          <div>Location</div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>New Up Coming Events !</h2>
        <p>Be a part of our upcoming NGO events and help bring joy, education, and hope to underprivileged children. Your presence and support can make a lasting impact and inspire real change in the lives of those who need it most.</p>
        <div className="events-buttons">
          <Link to={"/event"}>
          <button className="subscription-btn">Together for children's Future</button>
          </Link>
          <Link to={"/donate"}>
          <button className="donate-btn">Donate Now</button>
          </Link> 
        </div>
      </section>

      {/* Gift Greeting Section */}
      <section className="greeting-section">
        <div className="greeting-bg"></div>
        <div className="greeting-cards">
          <div className="greeting-card" onClick={() => setGreetingOpen(true)}>
            <img className="greeting-icon" src={HomeGreet} alt="Greeting" />
            <h2>Send a Greeting</h2>
            <p>Show your love and support by writing a heartfelt greeting that brings joy and encouragement to our amazing NGO children.</p>
            <button className="greeting-btn">Write a Greeting</button>
          </div>
          <div className="greeting-card" onClick={() => navigate('/donate')}>
            <img className="greeting-icon" src={HomeDonate} alt="Gift" />
            <h2>Send a Gift</h2>
            <p>Send a small donation make a child feel special. Your small gesture can bring immense joy, hope, and warmth to their heart.</p>
            <button className="greeting-btn">Give a Gift</button>
          </div>
        </div>
        <GreetingModal open={greetingOpen} onClose={() => setGreetingOpen(false)} />
      </section>
    </div>
  );
}

export default Home;
