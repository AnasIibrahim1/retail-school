"use client"
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Course } from '@/data/courses';
import './style.css';

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className="course-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
    >
      <Link href={`/courses/${course.id}`} className="course-card-link">
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
          <div className="course-overlay">
            <motion.button
              className="preview-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Preview
            </motion.button>
          </div>
        </div>

        <div className="course-content">
          <div className="course-category">
            <span>{course.category.charAt(0).toUpperCase() + course.category.slice(1)}</span>
          </div>
          
          <h3 className="course-title">{course.title}</h3>
          
          <p className="course-description">{course.description}</p>
          
          <div className="course-instructor">
            <img 
              src={course.instructorAvatar} 
              alt={course.instructor}
              className="instructor-avatar"
            />
            <span className="instructor-name">{course.instructor}</span>
          </div>

          <div className="course-meta">
            <div className="course-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(course.rating) ? '#FFD700' : '#E5E7EB'}
                    stroke="#FFD700"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="rating-text">
                {course.rating} ({course.reviewCount.toLocaleString()})
              </span>
            </div>
            
            <div className="course-details">
              <span className="duration">{course.duration}</span>
              <span className="level">{course.level}</span>
            </div>
          </div>

          <div className="course-footer">
            <div className="course-price">
              <span className="current-price">${course.price}</span>
              {course.originalPrice && (
                <span className="original-price">${course.originalPrice}</span>
              )}
            </div>
            
            <div className="course-stats">
              <span className="students-count">
                {course.studentsCount.toLocaleString()} students
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
