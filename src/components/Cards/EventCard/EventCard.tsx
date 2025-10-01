"use client"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import './style.css'

interface EventCardProps {
  title: string;
  time: string;
  location: string;
  date: {
    day: string;
    month: string;
  };
  image: string;
  href: string;
  index?: number;
}

export default function EventCard({ title, time, location, date, image, href, index = 0 }: EventCardProps) {
  return (
    <Link href={href} className="event-card-link">
      <motion.div
        className="event-card"
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        {/* Image on the left */}
        <motion.div 
          className="event-image"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src={image} 
            alt={title}
            width={200}
            height={200}
            className="event-img"
          />
          <div className="event-image-overlay" />
        </motion.div>

        {/* Content in the middle */}
        <div className="event-content">
          <motion.h3 
            className="event-title"
            color="#2A254D"
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          
          <div className="event-info">
            <div className="event-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#77838F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{time}</span>
            </div>
            
            <div className="event-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="#77838F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Date box on the right */}
        <motion.div 
          className="event-date-box"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
        >
          <span className="event-date-day">{date.day}</span>
          <span className="event-date-month">{date.month}</span>
        </motion.div>

        {/* Hover effect line */}
        <motion.div 
          className="event-hover-line"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  )
}

