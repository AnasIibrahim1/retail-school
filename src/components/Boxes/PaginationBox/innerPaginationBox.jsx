import React, { useState } from 'react'
import Image from 'next/image'
import './innerPaginationBox.css'

/**
 * @param {Object} props
 * @param {Array<{text: string, name: string, title: string, image?: string}>} props.data
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

  return (
    <div className="pagination-box-container2" style={{width: width, ...style}}>
        <div className="pagination-box-circle2" key={`circle-${currentIndex}`}>
          <Image 
            src={currentItem.image || "/photo.jpg"} 
            alt={currentItem.name}
            width={150}
            height={150}
            className="user-image"
          />
        </div>
      <div className="pagination-content2" style={{marginTop: "100px"}} key={`content-${currentIndex}`}>
        <p className="opinion-text" style={{textAlign: "justify", maxWidth: "600px", marginBottom: "40px"}}>{currentItem.text}</p>
        <div className="author-info">
<div className="author-info-left" style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "start", width: "40%"}}>
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
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
          <button 
            className="pagination-btn2 next-btn"
            onClick={handleNext}
            aria-label="Next opinion"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
        </div>
      )}
        </div>
      </div>
      

    </div>
  )
}