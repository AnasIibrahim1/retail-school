import "./style.css";
export default function HeaderPargraph({title, color, alignItems, justifyContent, style}) {
  return (
    <div className="header-paragraph" style={{alignItems: alignItems, justifyContent: justifyContent, ...style}}>
      <h1 style={{color: color}}>{title}</h1>
      <img src="/icons/frame.svg" alt="line-shape"  />
    </div>
  )
}