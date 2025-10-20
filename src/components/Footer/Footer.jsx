'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import SocialButtons from '../Buttons/Solcial Buttons/SocialButtons';
import './footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
    // Add your subscription logic here
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="/backgrounds/circles-bg-footer.svg" alt="Logo" style={{ height: '100%', position: 'absolute', top: 0, left: 0, zIndex:"0"}} />
        {/* Column 1: Logo + Lorem + Social Icons */}
        <div className="footer-column">
          <div className="footer-logo">
          <h2 style={{color: "white", fontSize: "20px", fontWeight: "bold", textAlign: "center"}}>Retail</h2>

          </div>
          <p className="footer-description">
            We provide the best educational and development services to help you achieve your professional and personal goals. Join us on the journey of learning and development.
          </p>
          <div className="footer-social">
            <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>} backgroundColor="transparent" borderColor="#FF7200" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>} backgroundColor="transparent" borderColor="#FF7200" />
          <SocialButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>} backgroundColor="transparent" borderColor="#FF7200" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div className="footer-column">
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-links">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="#web-design">Web Design</a></li>
            <li><a href="#mobile-apps">Mobile Apps</a></li>
            <li><a href="#ui-ux">UI/UX Design</a></li>
            <li><a href="#digital-marketing">Digital Marketing</a></li>
            <li><a href="#data-science">Data Science</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Riyadh, Saudi Arabia</span>
            </div>
            
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+966 50 123 4567</span>
            </div>
            
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>info@example.com</span>
            </div>
          </div>
          
          <div className="footer-subscribe">
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="subscribe-input"
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom" style={{zIndex:"3", position:"relative"}}>
        <div className="footer-container">
          <p>&copy; 2024 All Rights Reserved</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
