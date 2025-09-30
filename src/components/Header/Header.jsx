"use client"
import { motion, MotionConfig } from "motion/react"
import { useState } from "react"
import Link from "next/link"
import GradiantButton from "../Buttons/GrediantButton/GradiantButton"
import './style.css'

export default function Header() {
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const courses = [
    { id: 1, title: "Business Strategy" },
    { id: 2, title: "UI/UX Design" },
    { id: 3, title: "Web Development" },
    { id: 4, title: "Data Analysis" }
  ]

  const blogLinks = [
    { id: 'b1', title: 'Latest Articles', href: '/blog' },
    { id: 'b2', title: 'Tutorials', href: '/blog/tutorials' },
    { id: 'b3', title: 'Case Studies', href: '/blog/case-studies' },
    { id: 'b4', title: 'News', href: '/blog/news' }
  ]

  return (
      <motion.header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', minHeight: '80px', position: 'fixed', zIndex: 1000, padding: '0 100px'}}>

        <motion.div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
          <motion.h1 style={{margin: 0}}>Retail</motion.h1>

          <div style={{ position: 'relative', display: 'inline-block' }}>
            <motion.button
              onClick={() => setCoursesOpen(v => !v)}
              aria-expanded={coursesOpen}
              aria-label={coursesOpen ? 'Close courses' : 'Open courses'}
              className="courses-btn"
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
              <motion.span
                initial={false}
                style={{ display: 'inline-flex' }}
              >
                {coursesOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                    <line x1="6" y1="18" x2="18" y2="6"></line>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="17" x2="20" y2="17"></line>
                  </svg>
                )}
              </motion.span>
              <span style={{fontWeight: 600}}>Courses</span>
            </motion.button>

            {coursesOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                style={{
                  listStyle: 'none',
                  padding: '8px',
                  margin: 0,
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  minWidth: '220px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  border: '1px solid #E5E7EB',
                  zIndex: 20
                }}
              >
                {courses.map((course, index) => (
                  <motion.li
                    key={course.id}
                    initial={{ y: -4, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.03 * index }}
                    style={{
                      background: '#F9FAFB',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      marginTop: index === 0 ? 0 : '6px',
                      color: '#2A254D',
                      cursor: 'pointer'
                    }}
                    whileHover={{ backgroundColor: '#EEF2FF' }}
                  >
                    {course.title}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>
        </motion.div>

        <motion.div>
          <motion.ul className="nav-links" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
        <MotionConfig transition={{duration: 0.3, ease: 'easeInOut'}} whileTap={{scale: 1}}>
        <motion.li><Link href="/">Home</Link></motion.li>
            <motion.li><Link href="#">About</Link></motion.li>
            <motion.li style={{ position: 'relative' }}>
              <motion.button
                className="blog-btn"
                onClick={() => setBlogOpen(v => !v)}
                aria-expanded={blogOpen}
                aria-label={blogOpen ? 'Close blog' : 'Open blog'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: 'none',
                  background: 'transparent',
                  color: '#2A254D',
                  cursor: 'pointer',
                  padding: '6px 8px',
                  borderRadius: '8px'
                }}
              >
                <span>Blog</span>
                <motion.span
                  initial={false}
                  animate={{ rotate: blogOpen ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  style={{ display: 'inline-flex' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </motion.span>
              </motion.button>

              {blogOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  style={{
                    listStyle: 'none',
                    padding: '8px',
                    margin: 0,
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: 0,
                    minWidth: '220px',
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    border: '1px solid #E5E7EB',
                    zIndex: 20
                  }}
                >
                  {blogLinks.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ y: -4, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.03 * index }}
                      style={{
                        background: '#F9FAFB',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        marginTop: index === 0 ? 0 : '6px',
                        color: '#2A254D'
                      }}
                      whileHover={{ backgroundColor: '#EEF2FF' }}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
            <motion.li><Link href="#">Contact</Link></motion.li>
        </MotionConfig>
          </motion.ul>
        </motion.div>

        <motion.div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
            {/* Search input */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              minWidth: '40px'
            }}
          >
            <motion.div
              initial={false}
              animate={{ width: isSearchOpen ? '240px' : '40px' }}
              style={{ overflow: 'hidden' }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
            >
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: isSearchOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                placeholder="Search..."
                style={{
                  padding: '10px 16px',
                  paddingRight: '40px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '24px',
                  outline: 'none',
                  fontSize: '14px',
                  color: '#2A254D',
                  backgroundColor: '#F9FAFB',
                  transition: 'all 0.2s ease',
                  width: '240px'
                }}
                whileFocus={{
                  borderColor: '#2A254D',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              />
            </motion.div>
            <motion.button
              initial={false}
              animate={{
                right: isSearchOpen ? '12px' : '0',
                position: 'absolute'
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#77838F',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '8px'
              }}
              whileHover={{ color: '#2A254D' }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Login and Register buttons */}
<motion.div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
<GradiantButton href="/login" ariaLabel="Login" text="Login" />
<GradiantButton href="/register" ariaLabel="Register" text="Register" />
</motion.div>
        </motion.div>
      </motion.header>
  );
} 