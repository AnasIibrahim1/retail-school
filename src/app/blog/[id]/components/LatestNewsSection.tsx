"use client"
import React from 'react';
import { motion } from 'motion/react';
import NewsCard from '@/components/cards/NewsCard/NewsCard';
import { latestNews } from '@/data/news';
import './LatestNewsSection.css';

export default function LatestNewsSection() {
  // Get 4 latest news items (excluding the current one)
  const relatedNews = latestNews.slice(0, 4);

  return (
    <section className="latest-news-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-description">
            Stay updated with our latest insights and industry news
          </p>
        </motion.div>

        <motion.div
          className="news-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {relatedNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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
        </motion.div>

        <motion.div
          className="view-all-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="/blog"
            className="view-all-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Articles</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l3 3 7-7"/>
              <path d="M7 6l3 3 7-7"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
