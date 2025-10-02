"use client"
import React from 'react';
import { motion } from 'motion/react';
import './CourseDetailsTitle.css';

export default function CourseDetailsTitle() {
  return (
    <section className="course-details-title">
      <div className="container">
        <motion.div
          className="title-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="course-details-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Course Details
          </motion.h2>
          
          <motion.p 
            className="course-details-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore our comprehensive course offerings and find the perfect learning path for your goals. 
            From beginner to advanced levels, we have courses designed to help you succeed.
          </motion.p>

          <motion.div 
            className="course-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Courses Available</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
