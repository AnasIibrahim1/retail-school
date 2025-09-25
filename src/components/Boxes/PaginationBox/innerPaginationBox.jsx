import React, { useState } from 'react'
import Image from 'next/image'
import './innerPaginationBox.css'

/**
 * @param {Object} props
 * @param {Array<{text: string, name: string, title: string, image?: string, rating?: number}>} props.data
 * @param {Object} props.style
 */
export default function InnerPaginationBox({ data = [], width = "800px", style }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0))
  }

  if (!data || data.length === 0) {
    return null
  }

  const currentItem = data[currentIndex]

  const renderStars = (count = 0) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} className={i <= count ? 'star filled' : 'star'} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.785 1.402 8.164L12 18.896l-7.336 3.863 1.402-8.164L.132 9.21l8.2-1.192z"/>
        </svg>
      )
    }
    return stars
  }

  return (
    <div className="pagination-box-container2" style={{width: width, ...style}}>
      <div className="pagination-layout" key={`layout-${currentIndex}`}>
        <div className="avatar-square">
          <Image 
            src={currentItem.image || "/photo.jpg"} 
            alt={currentItem.name}
            width={180}
            height={180}
            className="user-image-square"
          />
        </div>
        <div className="pagination-right" key={`content-${currentIndex}`}>
          <p className="opinion-text">{currentItem.text}</p>
          <div className="rating-row">
            {renderStars(currentItem.rating || 0)}
          </div>
          <div className="author-and-controls">
            <div className="author-info-left">
              <h3 className="author-name">{currentItem.name}</h3>
              <p className="author-title">{currentItem.title}</p>
            </div>
            {data.length > 1 && (
              <div className="pagination-controls2">
                <button 
                  className="pagination-btn2 prev-btn"
                  onClick={handlePrevious}
                  aria-label="Previous opinion"
                >
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                <button 
                  className="pagination-btn2 next-btn"
                  onClick={handleNext}
                  aria-label="Next opinion"
                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                 
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}