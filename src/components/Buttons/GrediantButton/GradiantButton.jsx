"use client"
import { motion } from "motion/react"
import Link from "next/link"
import './style.css'

export default function GradiantButton( {href, ariaLabel, text, padding="10px 20px", onClick} ) {
    const buttonContent = (
      <motion.button
        className="gradiant-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          borderRadius: '999px',
          border: 'none',
          outline: 'none',
          padding: padding,
          color: '#FFFFFF',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
          fontSize: '0.875rem',
          fontWeight: '600'
        }}
        whileTap={{ scale: 0.98 }}
        whileHover={{ y: -1 }}
        animate={{backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']}}
        transition={{duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut'}}
        onClick={onClick}
      >
        {text}
      </motion.button>
    )

    return (
        <motion.div>
          {href ? (
            <Link href={href} aria-label={ariaLabel}>
              {buttonContent}
            </Link>
          ) : (
            buttonContent
          )}
        </motion.div>
    ) }