"use client"
import React from 'react';
import { motion } from 'motion/react';
import BlogHero from './components/BlogHero';
import BlogContent from './components/BlogContent';
import './style.css';

export default function BlogPage() {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <BlogHero />
      
      {/* Blog Content with Sidebar */}
      <BlogContent />
    </div>
  );
}
