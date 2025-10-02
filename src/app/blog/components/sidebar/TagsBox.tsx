"use client"
import React from 'react';
import { motion } from 'motion/react';
import './SidebarBox.css';

const tags = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Design',
  'UI/UX', 'Web Development', 'Mobile', 'AI', 'Machine Learning', 'Data Science',
  'Business', 'Marketing', 'SEO', 'Photography', 'Music', 'Education',
  'Tutorial', 'Tips', 'News', 'Technology', 'Innovation', 'Startup'
];

export default function TagsBox() {
  return (
    <div className="sidebar-box">
      <h3 className="sidebar-title">Tags</h3>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <motion.a
            key={tag}
            href={`/blog/tag/${tag.toLowerCase()}`}
            className="tag-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
