import React from 'react'
import './GeneralBox.css'

// Children is the content of the box
export default function GeneralBox({children, backgroundColor, width, height, borderColor, padding, flexDirection, alignItems, justifyContent, margin="0px"}) {
  return (
    <div className="general-box-container" style={{backgroundColor: backgroundColor, width: width, height: height, borderRadius: "10px", border: `1px solid ${borderColor}`, margin: margin, display: "flex", flexDirection: flexDirection, alignItems: alignItems, justifyContent: justifyContent, padding: padding}}>
        {children}
    </div>
  )
}   