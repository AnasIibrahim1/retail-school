"use client"
import { motion } from "motion/react"
import './style.css'

export default function Loading() {
  return (
    <motion.div 
      className="loading-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        {/* Logo/Brand */}
        <motion.h1 
          className="loading-logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Retail
        </motion.h1>

        {/* Spinner */}
        <div className="loading-spinner">
          <motion.div 
            className="spinner-circle"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p 
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          Loading...
        </motion.p>
      </div>

      {/* Background Animation */}
      <div className="loading-background">
        <motion.div 
          className="loading-circle loading-circle-1"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="loading-circle loading-circle-2"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </motion.div>
  )
}

