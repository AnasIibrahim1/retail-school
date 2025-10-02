"use client"
import React from 'react';
import { motion } from 'motion/react';
import './SidebarBox.css';

const categories = [
  { name: 'Technology', count: 24, href: '/blog/category/technology' },
  { name: 'Education', count: 18, href: '/blog/category/education' },
  { name: 'Design', count: 15, href: '/blog/category/design' },
  { name: 'Business', count: 12, href: '/blog/category/business' },
  { name: 'Marketing', count: 9, href: '/blog/category/marketing' },
  { name: 'Development', count: 21, href: '/blog/category/development' },
  { name: 'Photography', count: 6, href: '/blog/category/photography' },
  { name: 'Music', count: 4, href: '/blog/category/music' }
];

export default function CategoryBox() {
  return (
    <div className="sidebar-box">
      <h3 className="sidebar-title">Categories</h3>
      <div className="category-list">
        {categories.map((category, index) => (
          <motion.a
            key={category.name}
            href={category.href}
            className="category-item"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <span className="category-name">{category.name}</span>
            <span className="category-count">({category.count})</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
