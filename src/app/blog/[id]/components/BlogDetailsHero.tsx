"use client"
import React from 'react';
import { motion } from 'motion/react';
import './BlogDetailsHero.css';

interface BlogPost {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image: string;
  href: string;
}

interface BlogDetailsHeroProps {
  blogPost: BlogPost;
}

export default function BlogDetailsHero({ blogPost }: BlogDetailsHeroProps) {
  return (
    <section className="blog-details-hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <motion.h1 
            className="blog-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {blogPost.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="blog-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover the latest insights and trends in our comprehensive guide. 
            Learn from industry experts and stay ahead of the curve.
          </motion.p>

          {/* Author Info */}
          <motion.div 
            className="author-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="author-details">
              <div className="author-avatar">
                <img src={blogPost.author.avatar} alt={blogPost.author.name} />
              </div>
              <div className="author-meta">
                <h3 className="author-name">{blogPost.author.name}</h3>
                <span className="author-role">Content Writer</span>
              </div>
            </div>
            <div className="blog-meta">
              <div className="meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{blogPost.date}</span>
              </div>
              <div className="meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>8 min read</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
