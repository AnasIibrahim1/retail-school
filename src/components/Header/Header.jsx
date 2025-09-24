'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.header-container')) {
        setIsMenuOpen(false);
      }
      if (isSearchOpen && !event.target.closest('.search-container')) {
        setIsSearchOpen(false);
      }
    };

    const handleBodyOverflow = () => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    };

    handleScroll();
    handleBodyOverflow();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add your search logic here
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
<h2 style={{color: "#4F5DE4", fontSize: "20px", fontWeight: "bold", textAlign: "center"}}>Retail</h2>
        </div>

        {/* Navigation Links */}
        <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link href="/blog" onClick={closeMenu}>News</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact Us</Link></li>
            <li><Link href="/teacher" onClick={closeMenu}>Teachers</Link></li>
            <li><Link href="/courses" onClick={closeMenu}>Courses</Link></li>
            <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
            {/* Mobile Auth Buttons */}
            <div className="mobile-auth-buttons">
              <Link href="https://admin.al-maher.net/ar/login" className="mobile-signin-btn" onClick={closeMenu}>
                Sign In
              </Link>
              <Link href="/register" className="mobile-signup-btn" onClick={closeMenu}>
                Sign Up
              </Link>
            </div>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">
          {/* Search */}
          <div className="search-container">
            <button 
              className="search-toggle"
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            
            {isSearchOpen && (
              <div className="search-dropdown">
                <form onSubmit={handleSearch} className="search-form">
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                    autoFocus
                  />
                  <button type="submit" className="search-submit">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Authentication Buttons */}
          <div className="auth-buttons">
            <Link href="https://admin.al-maher.net/ar/login" className="signin-btn" aria-label="Sign In">
              Sign In
            </Link>
            <Link href="/register" className="signup-btn" aria-label="Sign Up">
              Sign Up
            </Link>
          </div>

          {/* Get in Touch Button */}
          <Link href="/contact" className="get-in-touch-btn" onClick={closeMenu}>
            Get in Touch
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}