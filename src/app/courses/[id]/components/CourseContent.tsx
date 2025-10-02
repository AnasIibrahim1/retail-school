"use client"
import React from 'react';
import { motion } from 'motion/react';
import { Course } from '@/data/courses';
import './CourseContent.css';

interface CourseContentProps {
  course: Course;
}

export default function CourseContent({ course }: CourseContentProps) {
  const whatYouWillLearn = [
    "Master the fundamentals of the subject",
    "Build real-world projects and applications",
    "Understand industry best practices and standards",
    "Develop problem-solving skills",
    "Learn from experienced professionals",
    "Get hands-on experience with tools and technologies"
  ];

  const requirements = [
    "Basic computer skills",
    "Internet connection",
    "No prior experience required",
    "Willingness to learn and practice"
  ];

  return (
    <section className="course-content">
      <div className="container">
        <div className="content-wrapper">
          {/* Course Description */}
          <motion.div 
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About This Course</h2>
            <div className="description-content">
              <p>{course.description}</p>
              <p>
                This comprehensive course is designed to take you from beginner to advanced level. 
                You'll learn through hands-on projects, real-world examples, and practical exercises 
                that will help you build a strong foundation in this field.
              </p>
              <p>
                Our expert instructors have years of industry experience and will guide you through 
                each concept with clear explanations and practical demonstrations. By the end of this 
                course, you'll have the skills and confidence to apply what you've learned in real-world scenarios.
              </p>
            </div>
          </motion.div>

          {/* What You Will Learn */}
          <motion.div 
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What You Will Learn</h2>
            <div className="learn-list">
              {whatYouWillLearn.map((item, index) => (
                <motion.div
                  key={index}
                  className="learn-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="learn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                      <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                      <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                      <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                      <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                    </svg>
                  </div>
                  <span className="learn-text">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Requirements */}
          <motion.div 
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Requirements</h2>
            <div className="requirements-list">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  className="requirement-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="requirement-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <span className="requirement-text">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Course Tags */}
          <motion.div 
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Course Tags</h2>
            <div className="tags-container">
              {course.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="course-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Instructor Information */}
          <motion.div 
            className="content-section instructor-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Meet Your Instructor</h2>
            <div className="instructor-card">
              <img 
                src={course.instructorAvatar} 
                alt={course.instructor}
                className="instructor-image"
              />
              <div className="instructor-details">
                <h3 className="instructor-name">{course.instructor}</h3>
                <p className="instructor-title">Senior Instructor & Industry Expert</p>
                <p className="instructor-bio">
                  With over 10 years of experience in the industry, {course.instructor} has helped 
                  thousands of students master new skills and advance their careers. Their practical 
                  approach to teaching combines real-world experience with proven learning methodologies.
                </p>
                <div className="instructor-stats">
                  <div className="instructor-stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="instructor-stat">
                    <span className="stat-number">50K+</span>
                    <span className="stat-label">Students Taught</span>
                  </div>
                  <div className="instructor-stat">
                    <span className="stat-number">4.9</span>
                    <span className="stat-label">Average Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
