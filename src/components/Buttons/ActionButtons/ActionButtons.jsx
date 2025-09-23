import React from 'react'
import './ActionButtons.css'

// Accessible, clickable action button (e.g., add to cart, like, favorite)
export default function ActionButtons({
  backgroundColor,
  borderRadius = '50%',
  width,
  height,
  icon,
  onClick,
  ariaLabel,
  disabled = false,
  title,
  margin="0"
}) {
  return (
    <button
      type="button"
      className="action-buttons-container"
      style={{ backgroundColor: backgroundColor, borderRadius: borderRadius, width: width, height: height, position: "absolute", top: "0", left: "0", cursor: "pointer", outline: "none", border: "none", display: "flex", alignItems: "center", justifyContent: "center", margin:margin }}
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      disabled={disabled}
    >
        {icon}
    </button>
  )
} 