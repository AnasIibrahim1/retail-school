"use client"
import React from 'react';
import { motion } from 'motion/react';
import './BlogDetailsContent.css';

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

interface BlogDetailsContentProps {
  blogPost: BlogPost;
}

export default function BlogDetailsContent({ blogPost }: BlogDetailsContentProps) {
  const blogContent = `
    <p>In today's rapidly evolving digital landscape, staying ahead of the curve is more important than ever. This comprehensive guide explores the latest trends and innovations that are shaping our industry.</p>
    
    <p>Whether you're a seasoned professional or just starting your journey, understanding these key concepts will help you make informed decisions and drive meaningful results in your projects.</p>
    
    <h2>Key Insights and Trends</h2>
    
    <p>The industry has seen remarkable growth over the past few years, with new technologies emerging at an unprecedented pace. From artificial intelligence to sustainable design practices, there's no shortage of exciting developments to explore.</p>
    
    <h3>What You'll Learn</h3>
    
    <ul>
      <li>Understanding the current market landscape</li>
      <li>Best practices for implementation</li>
      <li>Common pitfalls to avoid</li>
      <li>Future outlook and predictions</li>
    </ul>
    
    <p>By the end of this article, you'll have a solid foundation to build upon and the confidence to tackle new challenges in your field.</p>
    
    <h2>Practical Applications</h2>
    
    <p>Real-world examples demonstrate how these concepts can be applied effectively. We'll explore case studies from leading companies and examine the strategies that have proven most successful.</p>
    
    <blockquote>
      "The future belongs to those who understand how to leverage technology to create meaningful experiences." - Industry Expert
    </blockquote>
    
    <p>This philosophy drives much of the innovation we see today, and it's a principle that continues to guide successful projects across various industries.</p>
  `;

  return (
    <section className="blog-details-content">
      <div className="container">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
          
          {/* Tags */}
          <motion.div 
            className="blog-tags"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4>Tags:</h4>
            <div className="tags-list">
              {['Technology', 'Innovation', 'Guide', 'Trends', 'Industry'].map((tag, index) => (
                <motion.span
                  key={tag}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div 
            className="author-bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="author-bio-content">
              <div className="author-bio-avatar">
                <img src={blogPost.author.avatar} alt={blogPost.author.name} />
              </div>
              <div className="author-bio-text">
                <h4>About {blogPost.author.name}</h4>
                <p>
                  {blogPost.author.name} is a passionate content writer with over 5 years of experience 
                  in the industry. They specialize in creating engaging, informative content that helps 
                  readers stay informed about the latest trends and developments.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
