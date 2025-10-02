"use client"
import React from 'react';
import { motion } from 'motion/react';
import { latestNews } from '@/data/news';
import './SidebarBox.css';

export default function RecentPostsBox() {
  // Get the 5 most recent posts
  const recentPosts = latestNews.slice(0, 5);

  return (
    <div className="sidebar-box">
      <h3 className="sidebar-title">Recent Posts</h3>
      <div className="recent-posts-list">
        {recentPosts.map((post, index) => (
          <motion.a
            key={post.id}
            href={`/blog/${post.id}`}
            className="recent-post-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ x: 5, transition: { duration: 0.2 } }}
          >
            <div className="recent-post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="recent-post-content">
              <h4 className="recent-post-title">{post.title}</h4>
              <span className="recent-post-date">{post.date}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
