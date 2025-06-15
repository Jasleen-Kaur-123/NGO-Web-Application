import React, { useState, useEffect } from 'react';
import '../Style/Event.css';
import eventOne from '../Images/eventOne.jpeg';
import eventTwo from '../Images/eventTwo.jpg';
import eventThree from '../Images/eventThree.jpg';
import eventFour from '../Images/eventFour.jpeg';
import eventFive from '../Images/eventFive.jpg';

const slides = [
  { img: eventOne, heading: 'Art Event' },
  { img: eventTwo, heading: 'Food Event' },
  { img: eventThree, heading: 'Competation Event' },
  { img: eventFour, heading: 'Craft Event' },
  { img: eventFive, heading: 'Green Plant Event' },
];

const eventCards = [
    {
      date: 'May 12',
      type: 'Drawing Competition',
      time: '8:00am - 10:00am',
    },
    {
      date: 'June 1',
      type: 'Science Workshop',
      time: '10:00am - 1:00pm',
    },
    {
      date: 'July 25',
      type: 'Storytelling Session',
      time: '9:00am - 11:00am',
    },
    {
      date: 'Aug 21',
      type: 'Poetry Session',
      time: '1:00am - 2:30am',
    },
    {
      date: 'Sep 13',
      type: 'Art and Craft Session',
      time: '3:00pm - 5:30pm',
    },
    {
      date: 'Oct 25',
      type: 'Party Animal Session',
      time: '1:00am - 2:30am',
    }
  ];

const Event = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3500);
    return () => clearInterval(timer);
  }, [length]);

  const goToSlide = (idx) => setCurrent(idx);
  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
   <>
        <div className="event-carousel-hero">
      <div className="carousel-wrapper">
        {slides.map((slide, idx) => (
          <div
            className={`carousel-slide${idx === current ? ' active' : ''}`}
            key={idx}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="carousel-overlay">
              <h2 className="carousel-heading">{slide.heading}</h2>
            </div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
        <button className="carousel-control next" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
        <div className="carousel-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot${idx === current ? ' active' : ''}`}
              onClick={() => goToSlide(idx)}
            ></span>
          ))}
        </div>
      </div>
        </div>

        <section className="event-enroll-section">
        <h2 className="event-enroll-heading">Free booking in our Events enroll now.</h2>
        <p className="event-enroll-desc">Guide children, make them educate. Join our upcoming events to inspire and empower young minds!</p>
        <div className="event-enroll-cards">
          {eventCards.map((event, idx) => (
            <div className="event-enroll-card" key={idx}>
              <div className="event-enroll-date">{event.date}</div>
              <div className="event-enroll-type">{event.type}</div>
              <div className="event-enroll-time">{event.time}</div>
              <div className="event-enroll-actions">
                <button className="enroll-btn">Book your slot</button>
                <button className="call-btn" onClick={() => window.open('tel:+911236957616')}>Call Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>  
   </>
  );
};

export default Event;
