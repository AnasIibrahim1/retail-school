"use client"
import { motion, useInView } from "motion/react"
import { useRef, useState } from "react"
import GradiantButton from "../Buttons/GrediantButton/GradiantButton"
import './style.css'

export default function SubscribeSection() {
  const [email, setEmail] = useState('')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing:', email)
      // Add your subscription logic here
      setEmail('')
    }
  }

  return (
    <div className="subscribe-wrapper">
      <motion.div 
        ref={sectionRef}
        className="subscribe-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {/* Animated Background */}
        <div className="subscribe-background">
          <motion.div 
            className="subscribe-bg-shape subscribe-bg-shape-1"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          <motion.div 
            className="subscribe-bg-shape subscribe-bg-shape-2"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 50, 0],
              rotate: [0, -90, 0]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: 1
            }}
          />
          <motion.div 
            className="subscribe-bg-shape subscribe-bg-shape-3"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear",
              delay: 2
            }}
          />
        </div>

        {/* Content */}
        <div className="subscribe-content">
          {/* Left Side - Input */}
          <motion.div 
            className="subscribe-input-section"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.div 
              className="subscribe-input-wrapper"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="subscribe-input"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileFocus={{
                  boxShadow: "0 0 0 3px rgba(255, 37, 116, 0.1)"
                }}
              />
              <div className="subscribe-button-wrapper">
                <GradiantButton 
                  text="Subscribe" 
                  ariaLabel="Subscribe to newsletter"
                  onClick={handleSubscribe}
                  padding="12px 28px"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div 
            className="subscribe-text-section"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.h2 
              className="subscribe-title"
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p 
              className="subscribe-description"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Stay updated with the latest courses, news, and exclusive offers. 
              Join thousands of learners who trust us for their educational journey.
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div 
          className="subscribe-particle subscribe-particle-1"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="subscribe-particle subscribe-particle-2"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </div>
  )
}

