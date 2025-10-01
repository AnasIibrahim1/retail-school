"use client"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import './style.css'

interface NewsCardProps {
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image: string;
  href: string;
  index?: number;
}

export default function NewsCard({ title, author, date, image, href, index = 0 }: NewsCardProps) {
  return (
    <Link href={href} className="news-card-link">
      <motion.div
        className="news-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3 }
        }}
      >
        {/* Image Section - 60% */}
        <motion.div 
          className="news-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src={image} 
            alt={title}
            width={400}
            height={300}
            className="news-img"
          />
          <div className="news-image-overlay" />
        </motion.div>

        {/* Content Section - 40% */}
        <div className="news-content">
          {/* Meta Info */}
          <div className="news-meta">
            <div className="news-meta-item">
              <div className="news-author-avatar ">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span className="news-author-name">{author.name}</span>
            </div>

            <div className="news-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>{date}</span>
            </div>
          </div>

          {/* Title */}
          <motion.h3 
            className="news-title"
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
        </div>

        {/* Hover border effect */}
        <motion.div 
          className="news-hover-border"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  )
}

