import React from 'react';
import './style.css'
// Renders date in format: 25 Mar. 2023
// Props:
// - date: string | number | Date (optional). Defaults to today when omitted.
// - style: inline style object (optional)
// - className: additional class name (optional)
export default function DateDisplay({ date, style, className }) {
  const d = date ? new Date(date) : new Date();

  // Guard against invalid dates
  const isValid = !isNaN(d.getTime());
  if (!isValid) {
    return <span className={className} style={style}>Invalid date</span>;
  }

  const day = d.getDate();
  const monthShort = d.toLocaleString('en-US', { month: 'short' });
  const year = d.getFullYear();

  return (
    <span className={className} style={{...style, direction: 'ltr', display: 'inline-block'}}>
      {day} {monthShort}. {year}
    </span>
  );
}
