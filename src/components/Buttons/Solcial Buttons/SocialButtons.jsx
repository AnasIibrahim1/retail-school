import React from 'react'
import './SocialButtons.css';

export default function SocialButtons({backgroundColor, borderColor, icon}) {
  return (
    <div className="social-buttons-container" style={{backgroundColor: backgroundColor, border: `2px solid ${borderColor}`}}>
        <span>
{icon}
        </span>

    </div>
  )
}