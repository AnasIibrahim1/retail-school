import React from 'react'
import './PaperBox.css';

export default function PaperBox({alignItems, justifyContent, padding = '0px', content, backgroundColorGeneral, backgroundColor, width, height, margin="0px"}) {
  return (
<div className="paper-box-container-general" style={{'--bg': backgroundColorGeneral, width: width, height: height, margin: margin}}>
<div className="paper-box-container" style={{display: 'flex', alignItems: alignItems, justifyContent: justifyContent, backgroundColor: backgroundColor}}>
        <div className="paper-box-content" style={{padding: padding}}>
            {content}
        </div>
    </div>
</div>
  )
}