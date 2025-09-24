import "./style.css";
export default function StatusBox() {
    return (
        <div className="status-box-container">
            <div style={{width:"10%", height:"100%", backgroundColor:"#4F5DE4", borderRadius:"10px 0 0 10px", position:"absolute", left:"0", top:"0", bottom:"0", zIndex:"0"}}></div>
            <div className="status-icon-left">
<img src="/icons/Presentation.svg" alt="" />
            </div>
            <div className="status-icon-right">
                <h3>Presentation</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae odio asperiores officiis totam explicabo voluptas. Quod tempore quibusdam libero culpa, laborum obcaecati, numquam et saepe corrupti nesciunt ipsa ex reiciendis!</p>
            </div>
        </div>
    )
}