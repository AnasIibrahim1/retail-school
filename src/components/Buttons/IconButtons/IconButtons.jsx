import React from 'react'
import './IconButtons.css';

// icon is a React node
export default function IconButtons({backgroundColor, borderRadius, width, height, icon, padding}) {
  return (
    <div className="icon-buttons-container" style={{backgroundColor: backgroundColor, borderRadius: borderRadius, width: width, height: height, padding: padding}}>   
        <div className="icon-buttons-content">
            {icon}
        </div>
    </div>
  )
}