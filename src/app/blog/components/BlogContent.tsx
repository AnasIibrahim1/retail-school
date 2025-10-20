"use client"
import React from 'react';
import { motion } from 'motion/react';
import NewsCard from '@/components/cards/NewsCard/NewsCard';
import { latestNews } from '@/data/news';
import SearchBox from './sidebar/SearchBox';
import CategoryBox from './sidebar/CategoryBox';
import RecentPostsBox from './sidebar/RecentPostsBox';
import TagsBox from './sidebar/TagsBox';
import './BlogContent.css';

export default function BlogContent() {
  return (
    <section className="blog-content">
      <div className="container">
        <div className="blog-layout">
          {/* Main Blog Posts Column */}
          <motion.div 
            className="blog-main"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="blog-header">
              <h2 className="section-title">Latest Articles</h2>
              <p className="section-description">
                Stay informed with our latest insights and industry updates
              </p>
            </div>

            <div className="blog-posts">
              {latestNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NewsCard 
                    title={news.title}
                    author={news.author}
                    date={news.date}
                    image={news.image}
                    href={news.href}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              className="load-more-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                className="load-more-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Load More Articles</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 13l3 3 7-7"/>
                  <path d="M7 6l3 3 7-7"/>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside 
            className="blog-sidebar"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sidebar-content">
              {/* Search Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <SearchBox />
              </motion.div>

              {/* Category Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <CategoryBox />
              </motion.div>

              {/* Recent Posts Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <RecentPostsBox />
              </motion.div>

              {/* Tags Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <TagsBox />
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
