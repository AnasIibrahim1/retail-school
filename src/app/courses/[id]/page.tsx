"use client"
import React from 'react';
import { notFound } from 'next/navigation';
import { courses } from '@/data/courses';
import CourseHero from './components/CourseHero';
import CourseContent from './components/CourseContent';
import './style.css';

interface CoursePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CoursePage({ params }: CoursePageProps) {
  const resolvedParams = React.use(params);
  const course = courses.find(c => c.id === resolvedParams.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="course-page">
      {/* Hero Section - 100vh with two columns */}
      <CourseHero course={course} />
      
      {/* Single Column Content Section */}
      <CourseContent course={course} />
    </div>
  );
}
