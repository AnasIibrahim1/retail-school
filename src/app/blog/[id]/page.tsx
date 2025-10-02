"use client"
import React from 'react';
import { notFound } from 'next/navigation';
import { latestNews } from '@/data/news';
import BlogDetailsHero from './components/BlogDetailsHero';
import BlogDetailsImage from './components/BlogDetailsImage';
import BlogDetailsContent from './components/BlogDetailsContent';
import CourseDetailsTitle from './components/CourseDetailsTitle';
import LatestNewsSection from './components/LatestNewsSection';
import './style.css';

interface BlogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const resolvedParams = React.use(params);
  const blogPost = latestNews.find(post => post.id === resolvedParams.id);

  if (!blogPost) {
    notFound();
  }

  return (
    <div className="blog-details-page">
      {/* Hero Section with Title, Subtitle, and Author */}
      <BlogDetailsHero blogPost={blogPost} />
      
      {/* Full Width Blog Image */}
      <BlogDetailsImage blogPost={blogPost} />
      
      {/* Blog Description Content */}
      <BlogDetailsContent blogPost={blogPost} />
      
      {/* Course Details Title Section */}
      <CourseDetailsTitle />
      
      {/* Latest News Section */}
      <LatestNewsSection />
    </div>
  );
}
