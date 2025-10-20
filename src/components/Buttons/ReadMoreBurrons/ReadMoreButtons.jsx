import './ReadMoreButtons.css';

export default function ReadMoreButtons({content, href}) {
  return (
    <div className="read-more-buttons-container" style={{}}>
<a href={href} style={{textDecoration: "none", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", cursor: "pointer"}}>   
       {content}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F5DE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6"/>
      </svg></a>
    </div>
  )
}