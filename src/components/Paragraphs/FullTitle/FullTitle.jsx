import Header from "../Header/HeaderPargraph";
import "./style.css";
export default function FullTitle({title, header, alignItems, justifyContent, width, cjustifyContent="", calignItems}) {
    return (
        <div style={{width:width, display:"flex", flexDirection:"column", alignItems:calignItems, justifyContent:cjustifyContent}}>
      <Header title={header} color="#4F5DE4" alignItems={alignItems} justifyContent={justifyContent} style={{marginBottom:"20px"}} />
      <h1 className="full-title-h1">
        {title}
        </h1>
        </div>
    )
}