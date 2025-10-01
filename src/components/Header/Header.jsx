"use client"
import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import Link from "next/link"
import GradiantButton from "../Buttons/GrediantButton/GradiantButton"
import './style.css'

export default function Header() {
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const courses = [
    { id: 1, title: "Business Strategy", href: "/courses/business" },
    { id: 2, title: "UI/UX Design", href: "/courses/design" },
    { id: 3, title: "Web Development", href: "/courses/development" },
    { id: 4, title: "Data Analysis", href: "/courses/data" }
  ]

  const blogLinks = [
    { id: 'b1', title: 'Latest Articles', href: '/blog' },
    { id: 'b2', title: 'Tutorials', href: '/blog/tutorials' },
    { id: 'b3', title: 'Case Studies', href: '/blog/case-studies' },
    { id: 'b4', title: 'News', href: '/blog/news' }
  ]

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <>
      {/* Desktop Header (Above 1000px) */}
      <motion.header 
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : '0 0 0 rgba(0,0,0,0)'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="desktop-header"
      >
        <div className="header-container">
          {/* Left Section */}
          <motion.div className="header-left">
            <Link href="/">
              <motion.h1 
                style={{margin: 0}}
                whileHover={{ scale: 1.05 }}
              >
                Retail
              </motion.h1>
            </Link>

            <div style={{ position: 'relative', display: 'inline-block' }}>
              <motion.button
                onClick={() => setCoursesOpen(v => !v)}
                aria-expanded={coursesOpen}
                aria-label={coursesOpen ? 'Close courses' : 'Open courses'}
                className="courses-btn"
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}
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
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="dropdown-menu"
                >
                  {courses.map((course, index) => (
                    <motion.li
                      key={course.id}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.05 * index,
                        type: 'spring',
                        stiffness: 300,
                        damping: 20
                      }}
                      whileHover={{ 
                        x: 4,
                        backgroundColor: 'rgba(255, 37, 116, 0.08)',
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="dropdown-accent"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <Link href={course.href}>{course.title}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>

          {/* Center Section - Nav Links */}
          <motion.div className="header-center">
            <motion.ul className="nav-links">
              <motion.li whileHover={{ y: -2 }}><Link href="/">Home</Link></motion.li>
              <motion.li whileHover={{ y: -2 }}><Link href="/about">About</Link></motion.li>
              <motion.li style={{ position: 'relative' }} whileHover={{ y: -2 }}>
                <motion.button
                  className="blog-btn"
                  onClick={() => setBlogOpen(v => !v)}
                  aria-expanded={blogOpen}
                  aria-label={blogOpen ? 'Close blog' : 'Open blog'}
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
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="dropdown-menu"
                  >
                    {blogLinks.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          delay: 0.05 * index,
                          type: 'spring',
                          stiffness: 300,
                          damping: 20
                        }}
                        whileHover={{ 
                          x: 4,
                          backgroundColor: 'rgba(255, 37, 116, 0.08)',
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="dropdown-accent"
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <Link href={item.href}>{item.title}</Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.li>
              <motion.li whileHover={{ y: -2 }}><Link href="/contact">Contact</Link></motion.li>
            </motion.ul>
          </motion.div>

          {/* Right Section */}
          <motion.div className="header-right">
            {/* Search */}
            <motion.div className="search-container">
              <motion.div
                initial={false}
                animate={{ width: isSearchOpen ? '240px' : '40px' }}
                style={{ overflow: 'hidden' }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <motion.input
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isSearchOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  placeholder="Search..."
                  className="search-input"
                />
              </motion.div>
              <motion.button
                className="search-btn"
                initial={false}
                animate={{
                  right: isSearchOpen ? '12px' : '0',
                  position: 'absolute'
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Auth Buttons */}
            <motion.div className="auth-buttons">
              <GradiantButton href="/login" ariaLabel="Login" text="Login" />
              <GradiantButton href="/register" ariaLabel="Register" text="Register" />
            </motion.div>

            {/* Mobile Menu Toggle (below 1000px) */}
            <motion.button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="menu-icon">
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={{
                    opacity: isMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="menu-text">Menu</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Full Screen Menu (Below 1000px) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Blur Background */}
            <motion.div 
              className="menu-backdrop"
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(30px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.4 }}
            />

            {/* Animated Background Shapes */}
            <div className="menu-bg-shapes">
              <motion.div
                className="menu-shape menu-shape-1"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="menu-shape menu-shape-2"
                animate={{
                  x: [0, -80, 0],
                  y: [0, 60, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Menu Content */}
            <motion.div 
              className="menu-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              {/* Logo */}
              <motion.div 
                className="menu-logo"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.h2
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                >
                  Retail
                </motion.h2>
              </motion.div>

              {/* Navigation Links */}
              <motion.nav className="menu-nav">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 + index * 0.05,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                  >
                    <Link 
                      href={link.href}
                      className="menu-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.name}
                      </motion.span>
                      <motion.div 
                        className="menu-link-line"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Separator Line */}
              <motion.div 
                className="menu-separator"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              {/* Auth Buttons */}
              <motion.div 
                className="menu-auth"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <GradiantButton 
                  href="/login" 
                  ariaLabel="Login" 
                  text="Login"
                  padding="14px 32px"
                  onClick={() => setIsMenuOpen(false)}
                />
                <GradiantButton 
                  href="/register" 
                  ariaLabel="Register" 
                  text="Register"
                  padding="14px 32px"
                  onClick={() => setIsMenuOpen(false)}
                />
              </motion.div>

              {/* Footer Info */}
              <motion.div 
                className="menu-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p>© 2024 Retail School. Empowering learners worldwide.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
