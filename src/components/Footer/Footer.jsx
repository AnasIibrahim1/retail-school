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
            نحن نقدم أفضل الخدمات التعليمية والتطويرية لمساعدتك في تحقيق أهدافك المهنية والشخصية. انضم إلينا في رحلة التعلم والتطوير.
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
          <h3 className="footer-title">روابط سريعة</h3>
          <ul className="footer-links">
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#services">الخدمات</a></li>
            <li><a href="#courses">الدورات</a></li>
            <li><a href="#contact">اتصل بنا</a></li>
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div className="footer-column">
          <h3 className="footer-title">استكشف</h3>
          <ul className="footer-links">
            <li><a href="/faq">الأسئلة الشائعة</a></li>
            <li><a href="#web-design">تصميم المواقع</a></li>
            <li><a href="#mobile-apps">تطبيقات الجوال</a></li>
            <li><a href="#ui-ux">تصميم واجهات المستخدم</a></li>
            <li><a href="#digital-marketing">التسويق الرقمي</a></li>
            <li><a href="#data-science">علوم البيانات</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-column">
          <h3 className="footer-title">تواصل معنا</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>الرياض، المملكة العربية السعودية</span>
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
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="subscribe-input"
                required
              />
              <button type="submit" className="subscribe-btn">
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom" style={{zIndex:"3", position:"relative"}}>
        <div className="footer-container">
          <p>&copy; 2024 جميع الحقوق محفوظة</p>
          <div className="footer-bottom-links">
            <a href="#privacy">سياسة الخصوصية</a>
            <a href="#terms">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

