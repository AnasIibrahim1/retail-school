import React from 'react';
import './Buttons.css';

const General_Button = ({children, backgroundColor, color, padding, border, href, style, type = "submit", fontSize = "16px"}) => {
  return (
<a href={href} style={{textDecoration: 'none'}}>
<button className="custom-button" style={{backgroundColor: backgroundColor, color: color, padding: padding, border:border, ...style}} type={type}>
<div className="arrow-container">
      <svg className="arrow" style={{color: color}} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>
      </div>
      <div className="hover-overlay"></div>
      <span className="button-text" style={{fontSize: fontSize}}>{children}</span>
    </button>
</a>
  );
};

export default General_Button;
