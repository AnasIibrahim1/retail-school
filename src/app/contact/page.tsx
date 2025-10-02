"use client"
import React from 'react';
import { motion } from 'motion/react';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import FollowUsSection from './components/FollowUsSection';
import ContactFAQ from './components/ContactFAQ';
import './style.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <ContactHero />
      
      {/* Contact Form and Info */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>
      
      {/* Follow Us Section */}
      <FollowUsSection />
      
      {/* FAQ Section */}
      <ContactFAQ />
    </div>
  );
}
