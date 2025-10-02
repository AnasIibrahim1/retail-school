"use client"
import React from 'react';
import { motion } from 'motion/react';
import './BlogHero.css';

export default function BlogHero() {
  return (
    <section className="blog-hero">
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
            Our Blog
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover insights, tutorials, and the latest trends in education and technology. 
            Stay updated with our expert articles and industry news.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
