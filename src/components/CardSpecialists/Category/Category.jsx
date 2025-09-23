export default function Category({category}) {
    return (
      <div style={{ width: "fit-content", backgroundColor: "#4F5DE4", padding: "0px 10px", borderRadius: "5px", zIndex: "10"}}>
          <h3 style={{color: "#fff", fontSize: "16px", fontWeight: "bold"}}>{category}</h3>
      </div>
    )
  }