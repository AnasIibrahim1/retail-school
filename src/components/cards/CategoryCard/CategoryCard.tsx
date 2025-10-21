"use client"
import { motion } from "motion/react"
import Link from "next/link"
import './style.css'

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
  href: string;
  index?: number;
}

export default function CategoryCard({ name, icon, href, index = 0 }: CategoryCardProps) {
  return (
    <Link href={href} className="category-card-link">
      <motion.div
        className="category-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div 
          className="category-icon"
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="category-name"
          whileHover={{ color: '#FF2574' }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>

        {/* Animated underline */}
        <motion.div 
          className="category-underline"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating background effect */}
        <motion.div
          className="category-bg-effect"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
        />
      </motion.div>
    </Link>
  )
}

