"use client"
import React from 'react';
import { motion } from 'motion/react';
import { Course } from '@/data/courses';
import GradiantButton from '@/components/Buttons/GrediantButton/GradiantButton';
import './CourseHero.css';

interface CourseHeroProps {
  course: Course;
}

export default function CourseHero({ course }: CourseHeroProps) {
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  // Generate deterministic values based on course ID to avoid hydration issues
  const courseIdHash = course.id.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  const daysLeft = Math.abs(courseIdHash % 7) + 1; // 1-7 days left
  const lecturesCount = Math.abs(courseIdHash % 30) + 20; // 20-49 lectures

  return (
    <section className="course-hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column - Course Information */}
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Course Title & Subtitle */}
            <div className="course-header">
              <motion.h1 
                className="course-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {course.title}
              </motion.h1>
              <motion.p 
                className="course-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {course.description}
              </motion.p>
            </div>

            {/* Creator Information */}
            <motion.div 
              className="creator-info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="creator-header">
                <h3>Created by</h3>
              </div>
              <div className="creator-details">
                <img 
                  src={course.instructorAvatar} 
                  alt={course.instructor}
                  className="creator-avatar"
                />
                <div className="creator-text">
                  <h4 className="creator-name">{course.instructor}</h4>
                  <p className="creator-job">Senior Instructor</p>
                </div>
              </div>
            </motion.div>

            {/* Course Information Grid */}
            <motion.div 
              className="course-info-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Duration</span>
                  <span className="info-value">{course.duration}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Lectures</span>
                  <span className="info-value">{lecturesCount} lessons</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Enrolled</span>
                  <span className="info-value">{course.studentsCount.toLocaleString()}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Language</span>
                  <span className="info-value">{course.language}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                    <path d="M4 22h16"/>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21l-1.25.5c-.5.2-1.28.2-1.78 0l-1.25-.5A1.25 1.25 0 0 1 4 17v-2.34"/>
                    <path d="M20 14.66V17c0 .55.47.98.97 1.21l1.25.5c.5.2 1.28.2 1.78 0l1.25-.5A1.25 1.25 0 0 0 24 17v-2.34"/>
                    <path d="M12 14.66V17c0 .55.47.98.97 1.21l1.25.5c.5.2 1.28.2 1.78 0l1.25-.5A1.25 1.25 0 0 0 18 17v-2.34"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Skill Level</span>
                  <span className="info-value">{course.level}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Deadline</span>
                  <span className="info-value">Flexible</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                  </svg>
                </div>
                <div className="info-content">
                  <span className="info-label">Certificate</span>
                  <span className="info-value">Yes</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Course Image & Price */}
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="course-image-container">
              <img 
                src={course.image} 
                alt={course.title}
                className="course-image"
              />
              {course.isFeatured && (
                <div className="featured-badge">
                  <span>Featured</span>
                </div>
              )}
              {discountPercentage > 0 && (
                <div className="discount-badge">
                  <span>-{discountPercentage}%</span>
                </div>
              )}
            </div>

            <div className="pricing-section">
              <div className="price-info">
                <div className="current-price">${course.price}</div>
                {course.originalPrice && (
                  <div className="original-price">${course.originalPrice}</div>
                )}
              </div>

              {discountPercentage > 0 && (
                <div className="sale-info">
                  <div className="days-left">
                    <span className="days-number">{daysLeft}</span>
                    <span className="days-text">days left at this price!</span>
                  </div>
                </div>
              )}

              <div className="action-buttons">
                <GradiantButton 
                  href="/checkout" 
                  text="Buy Now" 
                  padding="16px 32px"
                  ariaLabel="Buy this course"
                />
                <motion.button
                  className="enroll-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Now
                </motion.button>
              </div>

              <div className="course-stats">
                <div className="stat-item">
                  <span className="stat-value">{course.rating}</span>
                  <span className="stat-label">Rating</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{course.reviewCount.toLocaleString()}</span>
                  <span className="stat-label">Reviews</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{course.studentsCount.toLocaleString()}</span>
                  <span className="stat-label">Students</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
