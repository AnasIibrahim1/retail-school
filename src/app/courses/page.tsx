"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'next/navigation';
import CourseCard from '@/components/Cards/CourseCard/CourseCard';
import { courses, getCoursesByCategory, Course } from '@/data/courses';
import { categories } from '@/data/categories';
import './style.css';

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayedCourses, setDisplayedCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const COURSES_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Get filtered courses based on selected category
  const filteredCourses = useMemo(() => {
    return getCoursesByCategory(selectedCategory);
  }, [selectedCategory]);

  // Initialize displayed courses and check for category from URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.some(cat => cat.id === categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Update displayed courses when category changes
  useEffect(() => {
    setCurrentPage(1);
    setDisplayedCourses(filteredCourses.slice(0, COURSES_PER_PAGE));
    setHasMore(filteredCourses.length > COURSES_PER_PAGE);
  }, [filteredCourses]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    window.history.pushState({}, '', url.toString());
  };

  const loadMoreCourses = async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate loading delay for smooth animation
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * COURSES_PER_PAGE;
    const endIndex = startIndex + COURSES_PER_PAGE;
    const newCourses = filteredCourses.slice(startIndex, endIndex);
    
    setDisplayedCourses(prev => [...prev, ...newCourses]);
    setCurrentPage(nextPage);
    setHasMore(endIndex < filteredCourses.length);
    setIsLoading(false);
  };

  const categoryOptions = [
    { id: 'all', name: 'All Courses', count: courses.length },
    ...categories.map(category => ({
      id: category.id,
      name: category.name,
      count: courses.filter(course => course.category === category.id).length
    }))
  ];

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">Explore Our Courses</h1>
            <p className="hero-description">
              Discover a wide range of courses designed to help you learn new skills, 
              advance your career, and achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container">
          <motion.div
            className="filter-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="filter-tabs">
              {categoryOptions.map((category) => (
                <motion.button
                  key={category.id}
                  className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <span className="tab-name">{category.name}</span>
                  <span className="tab-count">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="container">
          <motion.div
            className="courses-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="section-title">
              {selectedCategory === 'all' 
                ? 'All Courses' 
                : `${categoryOptions.find(cat => cat.id === selectedCategory)?.name} Courses`
              }
            </h2>
            <p className="section-description">
              Showing {displayedCourses.length} of {filteredCourses.length} courses
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="courses-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {displayedCourses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              className="load-more-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                className="load-more-button"
                onClick={loadMoreCourses}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <div className="loading-spinner">
                    <div className="spinner"></div>
                    <span>Loading...</span>
                  </div>
                ) : (
                  <>
                    <span>Load More Courses</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 13l3 3 7-7"/>
                      <path d="M7 6l3 3 7-7"/>
                    </svg>
                  </>
                )}
              </motion.button>
            </motion.div>
          )}

          {/* No More Courses Message */}
          {!hasMore && displayedCourses.length > 0 && (
            <motion.div
              className="no-more-courses"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>You&apos;ve reached the end! No more courses to load.</p>
            </motion.div>
          )}

          {/* No Courses Found */}
          {filteredCourses.length === 0 && (
            <motion.div
              className="no-courses-found"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="no-courses-content">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <h3>No courses found</h3>
                <p>We couldn&apos;t find any courses in this category. Try selecting a different category.</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
