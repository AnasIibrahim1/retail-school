import React from 'react';
import './Stars.css';

export default function Stars({ rating = 5, reviews, size = 'medium' }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`star ${i <= rating ? 'filled' : 'empty'}`}
          width={size === 'small' ? '16' : size === 'large' ? '24' : '20'}
          height={size === 'small' ? '16' : size === 'large' ? '24' : '20'}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F57005"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="stars-container" style={{zIndex: "10"}}>
      <div className="stars-wrapper">
        {renderStars()}
      </div>
      {reviews && (
        <span className="reviews-text">
          ({reviews} تقيمات)
        </span>
      )}
    </div>
  );
}
