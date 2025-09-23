import React from 'react'
import './ProfileCircles.css'

export default function ProfileCircles({image, backgroundColor, width, height}) {
  return (
    <div className="profile-circles-container" style={{backgroundColor: backgroundColor, width: width, height: height, borderRadius: "50%", position: "relative" }}>
      <img src={image} alt="profile-circles" style={{width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover"}}/>
    </div>
  )
}