"use client"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import './style.css'

interface InstructorCardProps {
  name: string;
  jobTitle: string;
  image: string;
  href: string;
  index?: number;
}

export default function InstructorCard({ name, jobTitle, image, href, index = 0 }: InstructorCardProps) {
  return (
    <Link href={href} className="instructor-card-link">
      <motion.div
        className="instructor-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3 }
        }}
      >
        {/* Image Section */}
        <motion.div 
          className="instructor-image-wrapper"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="instructor-image">
            <Image 
              src={image} 
              alt={name}
              width={300}
              height={300}
              className="instructor-img"
            />
            <div className="instructor-image-overlay" />
          </div>
          
          {/* Gradient Border Animation */}
          <motion.div 
            className="instructor-border"
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </motion.div>

        {/* Content Section */}
        <div className="instructor-content">
          <motion.h3 
            className="instructor-name"
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
          
          <p className="instructor-job-title">{jobTitle}</p>
          

        </div>
      </motion.div>
    </Link>
  )
}

