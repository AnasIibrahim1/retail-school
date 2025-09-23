export default function Hours({hour, backgroundColor= "#4F5DE4"}) {
  return (
    <div style={{ width: "fit-content", backgroundColor: backgroundColor, padding: "0px 10px", borderRadius: "5px", zIndex: "10"}}>
        <h3 style={{color: "#fff", fontSize: "16px", fontWeight: "bold"}}>{hour} ساعات</h3>
    </div>
  )
}