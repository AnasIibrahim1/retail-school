"use client"
import React from 'react';
import { motion } from 'motion/react';
import './ContactHero.css';

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible. 
            Whether you have questions about our courses, need support, or want to collaborate, we&apos;re here to help.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
