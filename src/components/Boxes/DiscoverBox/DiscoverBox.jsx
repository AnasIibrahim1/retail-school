import './style.css';
export default function DiscoverBox({icon, num, type, text, styles}) {
    return (
        <div className="discover-box-container" style={styles}>
            <img src={icon} alt="" />
            <h1 className="discover-box-num">{num}{type}</h1>
            <p className="discover-box-text">{text}</p>
        </div>
    )
}