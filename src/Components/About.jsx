import React, { useState } from 'react';
import '../Style/About.css';
import sponsorImg from '../Images/PartnerHonda.jpg';
import visitImg from '../Images/eventOne.jpeg';
import childrenImg from '../Images/eventTwo.jpg';
import teacherImg from '../Images/eventThree.jpg';
import caretakerImg from '../Images/eventFour.jpeg';
import leaderImg from '../Images/eventFive.jpg';

const impactStats = [
  { label: 'Sponsorships', value: 50, img: sponsorImg, desc: 'Supporting over 50+ long-term sponsorships for underprivileged children and communities.', progress: 30 },
  { label: 'Visits', value: 100, img: visitImg, desc: 'Organized 100+ impactful visits to schools, orphanages, and care centers across the region.', progress: 60 },
  { label: 'Children', value: 500, img: childrenImg, desc: 'Empowering 500+ children with education, nutrition, and healthcare support every year.', progress: 45 },
  { label: 'Teachers', value: 150, img: teacherImg, desc: 'Training and supporting 150+ teachers to deliver quality education in rural areas.', progress: 80 },
  { label: 'Care Takers', value: 20, img: caretakerImg, desc: 'Providing resources and training to 20+ dedicated caretakers for child welfare.', progress: 55 },
  { label: 'Leaders', value: 6, img: leaderImg, desc: 'Developing 6+ community leaders to drive sustainable change and growth.', progress: 90 },
];


const faqData = [
  { q: 'How can I become a sponsor?', a: 'You can become a sponsor by contacting us via the form below or calling our helpline.' },
  { q: 'What is the process for visiting?', a: 'Please fill out the visit request form and our team will get in touch with you.' },
  { q: 'How are donations used?', a: 'Donations are used transparently for education, health, and community programs.' },
  { q: 'How can I volunteer?', a: 'Reach out to us via email or phone and we will guide you through the process.' },
];

const About = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="about-page-container">
      {/* Section 1: Impact */}
      <section className="about-impact-section">
        <h2>Our Impact</h2>
        <p className="about-impact-years">Making a difference for 20+ years</p>
        <div className="about-impact-cards-grid">
          {impactStats.map((stat, idx) => (
            <div className="about-impact-card" key={stat.label}>
              <div className="about-impact-card-img-wrap">
                <img src={stat.img} alt={stat.label} className="about-impact-card-img" />
                <div className="about-impact-card-title">
                  <span className="about-impact-card-title-text">{stat.label}</span>
                </div>
              </div>
              <div className="about-impact-card-content">
                <p>{stat.desc}</p>
              </div>
              <div className="about-impact-card-progress">
                <div className="about-impact-card-progress-label">
                  Cost Pending: {stat.progress}%
                </div>
                <div className="about-impact-card-progress-bar-bg">
                  <div
                    className="about-impact-card-progress-bar-fill"
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="about-impact-card-action">
                <button className="about-impact-card-donate-btn">Donate Immediately Emergency</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: FAQ */}
      <section className="about-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="about-faq-list">
          {faqData.map((item, idx) => (
            <div className="about-faq-item" key={idx}>
              <button
                className="about-faq-question"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                aria-expanded={openFAQ === idx}
              >
                {item.q}
                <span className={`about-faq-arrow${openFAQ === idx ? ' open' : ''}`}>▼</span>
              </button>
              <div
                className={`about-faq-answer${openFAQ === idx ? ' open' : ''}`}
                style={{ maxHeight: openFAQ === idx ? '200px' : '0px' }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

  
    </div>
  );
};

export default About;
