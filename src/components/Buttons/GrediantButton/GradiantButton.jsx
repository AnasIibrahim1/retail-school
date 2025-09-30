import { motion } from "motion/react"
import Link from "next/link"
import './style.css'

export default function GradiantButton( {href, ariaLabel, text} ) {
    return (
        <motion.div>
              <Link href={href} aria-label={ariaLabel}>
                <motion.button
                  className="gradiant-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    borderRadius: '999px',
                    border: 'none',
                    outline: 'none',
                    padding: '10px 20px',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -1 }}
                  animate={{backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']}}
                  transition={{duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut'}}
                >
                  {text}
                </motion.button>
              </Link>
            </motion.div>
    ) }