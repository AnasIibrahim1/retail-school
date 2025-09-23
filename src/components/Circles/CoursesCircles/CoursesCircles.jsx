import React from 'react'
import './CoursesCircles.css'
import ActionButtons from '../../Buttons/ActionButtons/ActionButtons'

export default function CoursesCircles({backgroundColor, width, height, image, style}) {
  return (
    <div className="courses-circles-container" style={{backgroundColor: backgroundColor, width: width, height: height, borderRadius: "50%", position: "relative", padding: "10px", ...style }}>
        <ActionButtons icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>} backgroundColor="#4F5DE4" width="50px" height="50px" ariaLabel="Love" title="Love"/>
      <div className="courses-circles-content" style={{backgroundColor: backgroundColor, width: "225px", height: "225px", borderRadius: "50%" }}>
        <img src={image} alt="courses-circles" style={{width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover"}} />
      </div>
    </div>
  )
}