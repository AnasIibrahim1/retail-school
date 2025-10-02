"use client"
import React from 'react';
import { motion } from 'motion/react';
import './ContactInfo.css';

const contactMethods = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    description: 'Call us during business hours'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email',
    details: ['info@retailschool.com', 'support@retailschool.com'],
    description: 'We respond within 24 hours'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Address',
    details: ['123 Education Street', 'Learning City, LC 12345', 'United States'],
    description: 'Visit our main campus'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
    description: 'We&apos;re here to help'
  }
];

export default function ContactInfo() {
  return (
    <motion.div 
      className="contact-info-container"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="info-header">
        <h2 className="info-title">Contact Information</h2>
        <p className="info-description">
          Multiple ways to reach us. Choose the method that works best for you.
        </p>
      </div>

      <div className="contact-methods">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            className="contact-method"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="method-icon">
              {method.icon}
            </div>
            <div className="method-content">
              <h3 className="method-title">{method.title}</h3>
              <p className="method-description">{method.description}</p>
              <div className="method-details">
                {method.details.map((detail, detailIndex) => (
                  <span key={detailIndex} className="method-detail">{detail}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}
