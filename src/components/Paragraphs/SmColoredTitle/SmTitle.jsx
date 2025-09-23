'use client'
import React, { useEffect, useRef, useState } from 'react';

export default function SmColoredTitle({title, color, alignItems, justifyContent}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={elementRef}
      style={{
        width: "fit-content", 
        display: "flex", 
        flexDirection: "row", 
        alignItems: alignItems, 
        justifyContent: justifyContent, 
        gap: "10px",
        padding: "5px",
        borderRadius: "8px",
        position: "relative",
        background: "transparent",
        marginBottom: "10px"
      }}
    >
      {/* Bottom Border Animation */}
      <div style={{
        position: "absolute",
        bottom: "-2px",
        left: "0",
        right: "0",
        height: "2px",
        backgroundColor: color,
        transform: isVisible ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 1s ease-in-out"
      }}></div>
      
      <h1 style={{
        color: color, 
        fontSize: "24px", 
        fontWeight: "bold",
        margin: 0,
        zIndex: 1,
        position: "relative"
      }}>{title}</h1>
    </div>
  )
}