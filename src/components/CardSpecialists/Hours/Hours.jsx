export default function Hours({hour, backgroundColor= "#4F5DE4"}) {
  return (
    <div style={{ width: "fit-content", backgroundColor: backgroundColor, padding: "5px 10px", borderRadius: "5px", zIndex: "10"}}>
        <h3 style={{color: "#fff", fontSize: "16px", fontWeight: "bold"}}>{hour} Hours</h3>
    </div>
  )
}