import './style.css';

export default function ServiceBox({src, title, description}) {
    return (
        <div className="service-box">
            <img src={src} alt="image" />
            <h3>{title}</h3>
            <p>{description}</p>
           <div className="bottom">
           <button className="plus-btn">
                +
            </button>
           </div>
        </div>
    )
}